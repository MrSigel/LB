"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";
import { ArrowRightIcon, PhoneIcon, MailIcon, PinIcon, GlobeIcon } from "./icons";

const contactDetails = [
  { Icon: PhoneIcon, label: "+359 895 500 755", href: "tel:+359895500755" },
  { Icon: MailIcon, label: "info@limit-breakers.eu", href: "mailto:info@limit-breakers.eu" },
  { Icon: GlobeIcon, label: "www.limit-breakers.eu", href: "https://www.limit-breakers.eu" },
  { Icon: PinIcon, label: "Shipka 36, 1504 Sofia", href: null },
];

type Status = "idle" | "success";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: An echtes Backend / E-Mail-Service (z. B. API-Route) anbinden.
    // Aktuell nur Frontend-Bestätigung.
    setStatus("success");
    e.currentTarget.reset();
  }

  return (
    <section id="kontakt" className="section">
      <div className="container-lb">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-base-800 to-base-900 p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Linke Spalte: CTA-Text */}
            <Reveal>
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Lass uns über deinen Vertrieb sprechen
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-slate-300">
                  Im kostenlosen Erstgespräch schauen wir uns deinen Vertrieb an
                  und zeigen dir konkret, wo Luft nach oben ist.
                </p>

                <ul className="mt-8 space-y-4">
                  {contactDetails.map(({ Icon, label, href }) => (
                    <li key={label}>
                      {href ? (
                        <a
                          href={href}
                          className="group flex items-center gap-3 text-slate-200 transition-colors hover:text-white"
                        >
                          <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent/10 text-accent transition-all duration-300 group-hover:scale-110 group-hover:bg-accent/20">
                            <Icon className="h-5 w-5" />
                          </span>
                          {label}
                        </a>
                      ) : (
                        <span className="flex items-center gap-3 text-slate-200">
                          <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent/10 text-accent">
                            <Icon className="h-5 w-5" />
                          </span>
                          {label}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Rechte Spalte: Formular */}
            <Reveal delay={0.1}>
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="vorname" label="Vorname" autoComplete="given-name" />
                  <Field id="nachname" label="Nachname" autoComplete="family-name" />
                </div>
                <Field
                  id="email"
                  label="E-Mail"
                  type="email"
                  autoComplete="email"
                />
                <div>
                  <label htmlFor="nachricht" className="mb-2 block text-sm font-medium text-slate-200">
                    Nachricht
                  </label>
                  <textarea
                    id="nachricht"
                    name="nachricht"
                    rows={4}
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-slate-100 placeholder-slate-500 outline-none transition focus:border-accent/60 focus:ring-2 focus:ring-accent/20"
                    placeholder="Worum geht's? Erzähl kurz von deinem Vertrieb."
                  />
                </div>

                <label className="flex items-start gap-3 text-sm text-slate-400">
                  <input
                    type="checkbox"
                    name="datenschutz"
                    required
                    className="mt-1 h-4 w-4 shrink-0 rounded border-white/20 bg-white/5 accent-accent"
                  />
                  <span>
                    Ich habe die{" "}
                    <a href="/datenschutz" className="text-accent-light underline hover:text-accent">
                      Datenschutzerklärung
                    </a>{" "}
                    gelesen und stimme der Verarbeitung meiner Daten zu.
                  </span>
                </label>

                <button type="submit" className="btn-primary w-full">
                  Nachricht senden
                  <ArrowRightIcon className="h-4 w-4" />
                </button>

                {status === "success" && (
                  <p
                    role="status"
                    className="rounded-xl border border-accent/30 bg-accent/10 px-4 py-3 text-sm text-accent-light"
                  >
                    Danke! Deine Nachricht ist da – wir melden uns innerhalb von
                    24 Stunden.
                  </p>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-slate-200">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        autoComplete={autoComplete}
        className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-slate-100 placeholder-slate-500 outline-none transition focus:border-accent/60 focus:ring-2 focus:ring-accent/20"
      />
    </div>
  );
}
