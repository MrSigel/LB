import Link from "next/link";
import type { ReactNode } from "react";

/** Schlichtes Layout für Rechtstexte (Impressum, Datenschutz, AGB). */
export default function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <main className="section min-h-screen">
      <div className="container-lb max-w-3xl">
        <Link href="/" className="text-sm text-accent-light hover:text-accent">
          ← Zurück zur Startseite
        </Link>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {title}
        </h1>
        <div className="prose-invert mt-8 space-y-4 leading-relaxed text-slate-300">
          {children}
        </div>
      </div>
    </main>
  );
}
