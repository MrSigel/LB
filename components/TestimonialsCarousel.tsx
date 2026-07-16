"use client";

import { useState } from "react";
import { ArrowRightIcon } from "./icons";
import { testimonials, initials, Stars } from "./testimonials-data";

/**
 * Client-Insel: das mobile Karussell braucht State fuer die aktive Stimme.
 * Auf dem Desktop wird stattdessen das statische Raster gezeigt (siehe
 * Testimonials), das ganz ohne JavaScript auskommt.
 */
export default function TestimonialsCarousel() {
  const [active, setActive] = useState(0);
  const go = (dir: number) =>
    setActive((prev) => (prev + dir + testimonials.length) % testimonials.length);

  const t = testimonials[active];

  return (
    <div className="mt-12 md:hidden">
      <div className="relative min-h-[320px]">
        {/* Der key-Wechsel montiert die Figur neu und startet damit die
            CSS-Animation erneut – ohne Animationsbibliothek. */}
        <figure key={active} className="card slide-in flex flex-col">
          <Stars rating={t.rating} />
          <blockquote className="mt-5 text-slate-300">„{t.quote}"</blockquote>
          <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-accent/15 text-sm font-bold text-accent-light">
              {initials(t.name)}
            </div>
            <div>
              <div className="font-semibold text-white">{t.name}</div>
              <div className="text-sm text-slate-400">{t.role}</div>
            </div>
          </figcaption>
        </figure>
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
  );
}
