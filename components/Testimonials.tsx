"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import { StarIcon, ArrowRightIcon } from "./icons";

/** Echte Kundenstimmen von limit-breakers.eu. */
const testimonials = [
  {
    name: "Anja Hasenberg",
    role: "Kundin",
    rating: 5,
    quote:
      "Die Zusammenarbeit mit den Limitbreakers hat mir gezeigt, was Professionalität gepaart mit Zuverlässigkeit bedeutet. Ich fühle mich sehr willkommen und gut beraten. Alle meine Wünsche wurden umgesetzt.",
  },
  {
    name: "Tim Fuhr",
    role: "Kunde",
    rating: 5,
    quote:
      "Kann das Team der Limitbreakers nur weiterempfehlen. Herr Klaus ist auf alle unsere Wünsche eingegangen, Probleme wurden schnell gelöst. Die Kommunikation war super angenehm.",
  },
  {
    name: "Roxy Cann",
    role: "Kundin",
    rating: 5,
    quote:
      "Meine Wünsche und Probleme wurden sofort gelöst – toller Service! Schnelle Umsetzung und ein Mega Team!",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" role="img" aria-label={`Bewertung: ${rating} von 5 Sternen`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon
          key={i}
          className={i < rating ? "h-5 w-5 text-accent" : "h-5 w-5 text-slate-600"}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const go = (dir: number) =>
    setActive((prev) => (prev + dir + testimonials.length) % testimonials.length);

  return (
    <section id="stimmen" className="section">
      <div className="container-lb">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Was unsere Kunden sagen
            </h2>
          </div>
        </Reveal>

        {/* Grid (Desktop) */}
        <div className="mt-14 hidden gap-6 md:grid md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="card flex h-full flex-col">
                <Stars rating={t.rating} />
                <blockquote className="mt-5 flex-1 text-slate-300">
                  „{t.quote}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-accent/15 text-sm font-bold text-accent-light">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{t.name}</div>
                    <div className="text-sm text-slate-400">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Karussell (Mobile) */}
        <div className="mt-12 md:hidden">
          <div className="relative min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.figure
                key={active}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35 }}
                className="card flex flex-col"
              >
                <Stars rating={testimonials[active].rating} />
                <blockquote className="mt-5 text-slate-300">
                  „{testimonials[active].quote}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-accent/15 text-sm font-bold text-accent-light">
                    {testimonials[active].name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      {testimonials[active].name}
                    </div>
                    <div className="text-sm text-slate-400">
                      {testimonials[active].role}
                    </div>
                  </div>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2" role="tablist" aria-label="Kundenstimmen auswählen">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Stimme ${i + 1}`}
                  aria-selected={i === active}
                  role="tab"
                  className={`h-2 rounded-full transition-all ${
                    i === active ? "w-6 bg-accent" : "w-2 bg-slate-600"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => go(-1)}
                aria-label="Vorherige Stimme"
                className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 text-slate-200 transition-colors hover:border-accent/50"
              >
                <ArrowRightIcon className="h-4 w-4 rotate-180" />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Nächste Stimme"
                className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 text-slate-200 transition-colors hover:border-accent/50"
              >
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
