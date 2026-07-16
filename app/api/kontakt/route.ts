import { NextResponse } from "next/server";
import { readFile } from "node:fs/promises";
import path from "node:path";
import nodemailer from "nodemailer";
import { buildContactEmail, LOGO_CID, type ContactPayload } from "@/lib/contact-email";

// nodemailer braucht die Node-Runtime, nicht Edge.
export const runtime = "nodejs";

const LIMITS = { vorname: 80, nachname: 80, email: 254, nachricht: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Body = Partial<
  Record<keyof ContactPayload | "datenschutz" | "website" | "locale", unknown>
>;

function validate(body: Body): { data: ContactPayload } | { error: string } {
  const get = (k: keyof ContactPayload) =>
    typeof body[k] === "string" ? (body[k] as string).trim() : "";

  const data: ContactPayload = {
    vorname: get("vorname"),
    nachname: get("nachname"),
    email: get("email"),
    nachricht: get("nachricht"),
  };

  for (const [key, max] of Object.entries(LIMITS) as [keyof ContactPayload, number][]) {
    if (!data[key]) return { error: "fields" };
    if (data[key].length > max) return { error: "toolong" };
  }
  if (!EMAIL_RE.test(data.email)) return { error: "email" };
  if (body.datenschutz !== true) return { error: "privacy" };

  return { data };
}

function createTransport() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return null;

  const port = Number(SMTP_PORT ?? 587);
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    // Port 465 spricht von Anfang an TLS, 587 startet per STARTTLS.
    secure: SMTP_SECURE ? SMTP_SECURE === "true" : port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
}

export async function POST(request: Request) {
  let body: Body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  // Honeypot: echte Menschen sehen dieses Feld nicht, Bots füllen es aus.
  if (typeof body.website === "string" && body.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const result = validate(body);
  if ("error" in result) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }
  const { data } = result;

  const transport = createTransport();
  if (!transport) {
    console.error("[kontakt] SMTP nicht konfiguriert – siehe .env.example");
    return NextResponse.json(
      { error: "notconfigured" },
      { status: 503 }
    );
  }

  const locale = typeof body.locale === "string" ? body.locale : "de";
  const { subject, html, text } = buildContactEmail(data, new Date(), locale);
  const logo = await readFile(
    path.join(process.cwd(), "public", "images", "brand", "logo-white.png")
  );

  try {
    const info = await transport.sendMail({
      // From bleibt unsere eigene Adresse: mit der Absenderadresse des Kunden
      // würden SPF/DKIM scheitern und die Mail im Spam landen.
      from: process.env.MAIL_FROM ?? `"Limit Breakers" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO ?? "glowreel.enrico@gmail.com",
      replyTo: `"${data.vorname} ${data.nachname}" <${data.email}>`,
      subject,
      text,
      html,
      attachments: [
        {
          filename: "logo-white.png",
          content: logo,
          cid: LOGO_CID,
          contentDisposition: "inline",
        },
      ],
    });

    // Läuft der Versand über ein Ethereal-Testkonto, liefert das eine
    // Vorschau-URL. Bei echtem SMTP ist der Wert false.
    const preview = nodemailer.getTestMessageUrl(info);
    if (preview) console.log("[kontakt] Testvorschau:", preview);
  } catch (err) {
    // Details bleiben im Server-Log, der Client bekommt keine SMTP-Interna.
    console.error("[kontakt] Versand fehlgeschlagen:", err);
    return NextResponse.json(
      { error: "send" },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
