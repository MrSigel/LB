import Link from "next/link";
import Reveal from "./Reveal";
import { ArrowRightIcon } from "./icons";

const principles = [
  "Wir sind bei jedem Schritt dabei.",
  "Wir lassen kein Potenzial liegen.",
  "Am Ende zählt dein Umsatz.",
];

export default function BreakBanner() {
  return (
    <section className="section">
      <div className="container-lb">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-gradient-to-br from-base-800 to-base-900 p-8 sm:p-14">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/15 blur-[100px]" />
            <div className="relative">
              <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Miss uns an unseren Ergebnissen
              </h2>

              <ul className="mt-8 grid gap-4 sm:grid-cols-3">
                {principles.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-5 text-slate-200"
                  >
                    <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                      ✓
                    </span>
                    <span className="font-medium">{p}</span>
                  </li>
                ))}
              </ul>

              <Link href="/kontakt" className="btn-primary mt-10">
                Jetzt Erstgespräch sichern
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
