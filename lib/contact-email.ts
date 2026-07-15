/**
 * Baut die Benachrichtigungs-Mail für eine Kontaktanfrage.
 *
 * Tabellen-Layout und Inline-Styles sind hier Absicht: Outlook & Co.
 * unterstützen weder Flex/Grid noch <style>-Blöcke zuverlässig.
 */

export type ContactPayload = {
  vorname: string;
  nachname: string;
  email: string;
  nachricht: string;
};

/** Content-ID des eingebetteten Logos – muss zum Attachment in der Route passen. */
export const LOGO_CID = "lb-logo";

const BRAND = {
  ground: "#0d0d10",
  accent: "#a01c25",
  accentLight: "#c62c38",
  ink: "#1a1a1f",
  inkMute: "#6b6b76",
  line: "#e4e4e8",
  surface: "#f6f6f7",
};

const esc = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/** Zeilenumbrüche der Nachricht für HTML erhalten. */
const nl2br = (s: string) => esc(s).replace(/\r?\n/g, "<br>");

const row = (label: string, value: string) => `
  <tr>
    <td style="padding:18px 32px;border-bottom:1px solid ${BRAND.line};">
      <p style="margin:0 0 4px;font-size:11px;letter-spacing:.09em;text-transform:uppercase;color:${BRAND.inkMute};font-weight:700;">${esc(label)}</p>
      <p style="margin:0;font-size:16px;color:${BRAND.ink};">${value}</p>
    </td>
  </tr>`;

export function buildContactEmail(data: ContactPayload, receivedAt: Date) {
  const name = `${data.vorname} ${data.nachname}`.trim();
  const stamp = new Intl.DateTimeFormat("de-DE", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Europe/Berlin",
  }).format(receivedAt);

  const subject = `Neue Kontaktanfrage von ${name}`;

  const text = [
    "Neue Kontaktanfrage über limit-breakers.eu",
    "",
    `Name:    ${name}`,
    `E-Mail:  ${data.email}`,
    "",
    "Nachricht:",
    data.nachricht,
    "",
    `Eingegangen: ${stamp}`,
    "",
    `Direkt antworten geht per Reply – die Absenderadresse ist auf ${data.email} gesetzt.`,
  ].join("\n");

  const html = `<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light">
<title>${esc(subject)}</title>
</head>
<body style="margin:0;padding:0;background:${BRAND.surface};">
  <!-- Vorschautext im Postfach, im Body selbst unsichtbar -->
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">
    ${esc(name)} · ${esc(data.email)} — ${esc(data.nachricht.slice(0, 90))}
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${BRAND.surface};">
    <tr>
      <td align="center" style="padding:32px 16px;">

        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0"
               style="width:600px;max-width:100%;background:#ffffff;border:1px solid ${BRAND.line};border-radius:14px;overflow:hidden;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">

          <!-- Kopf -->
          <tr>
            <td style="background:${BRAND.ground};padding:28px 32px 24px;">
              <img src="cid:${LOGO_CID}" width="150" alt="Limit Breakers"
                   style="display:block;border:0;height:auto;width:150px;">
              <p style="margin:22px 0 0;font-size:21px;line-height:1.3;font-weight:700;color:#ffffff;letter-spacing:-.01em;">
                Neue Kontaktanfrage
              </p>
              <p style="margin:6px 0 0;font-size:14px;color:#9a9aa6;">
                Über das Formular auf limit-breakers.eu
              </p>
            </td>
          </tr>
          <tr><td style="height:3px;background:${BRAND.accent};line-height:3px;font-size:0;">&nbsp;</td></tr>

          <!-- Daten -->
          ${row("Name", esc(name))}
          ${row(
            "E-Mail",
            `<a href="mailto:${esc(data.email)}" style="color:${BRAND.accent};text-decoration:none;">${esc(data.email)}</a>`
          )}

          <tr>
            <td style="padding:18px 32px 4px;">
              <p style="margin:0 0 8px;font-size:11px;letter-spacing:.09em;text-transform:uppercase;color:${BRAND.inkMute};font-weight:700;">Nachricht</p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="border-left:3px solid ${BRAND.accent};background:${BRAND.surface};border-radius:0 8px 8px 0;padding:14px 18px;">
                    <p style="margin:0;font-size:15px;line-height:1.65;color:${BRAND.ink};">${nl2br(data.nachricht)}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Antworten -->
          <tr>
            <td style="padding:26px 32px 30px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="background:${BRAND.accent};border-radius:10px;">
                    <a href="mailto:${esc(data.email)}?subject=${encodeURIComponent("Re: Deine Anfrage bei Limit Breakers")}"
                       style="display:inline-block;padding:13px 26px;font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;">
                      ${esc(data.vorname)} antworten
                    </a>
                  </td>
                </tr>
              </table>
              <p style="margin:14px 0 0;font-size:13px;color:${BRAND.inkMute};">
                Ein einfaches „Antworten“ geht ebenfalls direkt an ${esc(data.email)}.
              </p>
            </td>
          </tr>

          <!-- Fuß -->
          <tr>
            <td style="background:${BRAND.surface};border-top:1px solid ${BRAND.line};padding:18px 32px;">
              <p style="margin:0;font-size:12px;line-height:1.6;color:${BRAND.inkMute};">
                Eingegangen am ${esc(stamp)}<br>
                Limit Breakers · Shipka 36, 1504 Sofia
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  return { subject, html, text };
}
