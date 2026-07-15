"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";

/**
 * „Limit Skills" – wie auf der Originalseite: drei Kompetenz-Balken.
 * Werte spiegeln unsere Kernstärken wider und können angepasst werden.
 */
const skills = [
  { label: "Marketing", value: 99 },
  { label: "Vertrieb", value: 99 },
  { label: "Software", value: 99 },
];

const DURATION = 1.1;
const delayFor = (i: number) => 0.15 + i * 0.15;

export default function LimitSkills() {
  const reduceMotion = useReducedMotion();
  const listRef = useRef<HTMLUListElement>(null);
  // Ein gemeinsamer Trigger für Balken und Zahl, damit beide synchron laufen.
  const inView = useInView(listRef, { once: true, margin: "-60px" });

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
            <ul ref={listRef} className="space-y-7">
              {skills.map((skill, i) => (
                <li key={skill.label}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-semibold text-white">
                      {skill.label}
                    </span>
                    <span className="text-sm font-medium tabular-nums text-accent-light">
                      <CountUp to={skill.value} start={inView} delay={delayFor(i)} />
                    </span>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-accent to-accent-light"
                      initial={reduceMotion ? false : { width: 0 }}
                      animate={
                        inView || reduceMotion ? { width: `${skill.value}%` } : {}
                      }
                      transition={{
                        duration: DURATION,
                        delay: delayFor(i),
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

/** Zählt von 0 auf den Zielwert hoch, sobald die Balken ins Bild scrollen. */
function CountUp({
  to,
  start,
  delay,
}: {
  to: number;
  start: boolean;
  delay: number;
}) {
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    if (reduceMotion) {
      setValue(to);
      return;
    }

    const controls = animate(0, to, {
      duration: DURATION,
      delay,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [start, to, delay, reduceMotion]);

  return <>{value}%</>;
}
