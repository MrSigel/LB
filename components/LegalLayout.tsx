import Link from "./AppLink";
import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

/** Layout für Rechtstexte (Impressum, Datenschutz, AGB). */
export default function LegalLayout({
  title,
  intro,
  children,
}: {
  title: string;
  /** Kurzer Hinweis unter der Überschrift, z. B. Stand des Dokuments. */
  intro?: string;
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="pb-24 pt-32 sm:pt-40">
        <div className="container-lb max-w-3xl">
          <Link href="/" className="text-sm text-accent-light hover:text-accent">
            ← Zurück zur Startseite
          </Link>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h1>
          {intro && <p className="mt-4 text-sm text-slate-500">{intro}</p>}
          <div className="legal mt-10">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}
