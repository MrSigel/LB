"use client";

import { motion, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";

/**
 * „Limit Skills" – wie auf der Originalseite: drei Kompetenz-Balken.
 * Werte spiegeln unsere Kernstärken wider und können angepasst werden.
 */
const skills = [
  { label: "Marketing", value: 92 },
  { label: "Vertrieb", value: 97 },
  { label: "Software", value: 88 },
];

export default function LimitSkills() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="section">
      <div className="container-lb">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Wofür wir stehen
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                Wir stehen für Qualität und Umsetzung. Weiterentwicklung ist
                Pflicht. Ergebnisse sichern Vorsprung.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="space-y-7">
              {skills.map((skill, i) => (
                <li key={skill.label}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-semibold text-white">
                      {skill.label}
                    </span>
                    <span className="text-sm font-medium text-accent-light">
                      {skill.value}%
                    </span>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-accent to-accent-light"
                      initial={reduceMotion ? false : { width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{
                        duration: 1.1,
                        delay: 0.15 + i * 0.15,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
