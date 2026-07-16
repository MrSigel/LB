import Link from "./AppLink";
import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

/**
 * Layout für Rechtstexte (Impressum, Datenschutz, AGB).
 *
 * Die Rechtstexte selbst bleiben in allen Sprachfassungen deutsch – eine
 * Uebersetzung erzeugte eine zweite rechtsverbindliche Fassung. Rahmen,
 * Navigation und Fuss sind uebersetzt, und in en/bg weist ein Hinweis
 * darauf hin.
 */
export default function LegalLayout({
  locale,
  dict,
  title,
  intro,
  children,
}: {
  locale: Locale;
  dict: Dictionary;
  title: string;
  /** Kurzer Hinweis unter der Überschrift, z. B. Stand des Dokuments. */
  intro?: string;
  children: ReactNode;
}) {
  return (
    <>
      <Header locale={locale} t={dict.nav} />
      <main className="pb-24 pt-32 sm:pt-40">
        <div className="container-lb max-w-3xl">
          <Link href={`/${locale}`} className="text-sm text-accent-light hover:text-accent">
            {dict.legal.backHome}
          </Link>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h1>
          {intro && <p className="mt-4 text-sm text-slate-500">{intro}</p>}

          {dict.legal.germanOnly && (
            <p className="note mt-6" lang={locale}>
              {dict.legal.germanOnly}
            </p>
          )}

          {/* lang="de": der Rechtstext bleibt deutsch, auch wenn die Seite
              in einer anderen Sprache laeuft. Screenreader sprechen ihn
              dadurch korrekt aus. */}
          <div className="legal mt-10" lang="de">
            {children}
          </div>
        </div>
      </main>
      <Footer locale={locale} t={dict.footer} homeAria={dict.nav.home_aria} />
    </>
  );
}
