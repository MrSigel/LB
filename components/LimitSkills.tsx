import Reveal from "./Reveal";
import SkillBars from "./SkillBars";
import type { Dictionary } from "@/lib/i18n/dictionaries";

/**
 * „Limit Skills" – drei Kompetenz-Balken.
 *
 * Server-Komponente: Ueberschrift und Text sind statisch. Nur die Balken
 * (SkillBars) sind eine Client-Insel, die beim Scrollen hochzaehlt.
 */
export default function LimitSkills({ t }: { t: Dictionary["skills"] }) {
  return (
    <section id="skills" className="section">
      <div className="container-lb">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {t.title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                {t.subtitle}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <SkillBars labels={t.labels} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
