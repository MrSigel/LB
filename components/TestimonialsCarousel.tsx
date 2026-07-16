"use client";

import { useState } from "react";
import { ArrowRightIcon } from "./icons";
import { buildTestimonials, initials, Stars } from "./testimonials-data";
import type { Dictionary } from "@/lib/i18n/dictionaries";

/**
 * Client-Insel: das mobile Karussell braucht State fuer die aktive Stimme.
 * Auf dem Desktop wird stattdessen das statische Raster gezeigt (siehe
 * Testimonials), das ganz ohne JavaScript auskommt.
 */
export default function TestimonialsCarousel({
  t,
}: {
  t: Dictionary["testimonials"];
}) {
  const testimonials = buildTestimonials(t);
  const [active, setActive] = useState(0);
  const go = (dir: number) =>
    setActive((prev) => (prev + dir + testimonials.length) % testimonials.length);

  const item = testimonials[active];

  return (
    <div className="mt-12 md:hidden">
      <div className="relative min-h-[320px]">
        {/* Der key-Wechsel montiert die Figur neu und startet damit die
            CSS-Animation erneut – ohne Animationsbibliothek. */}
        <figure key={active} className="card slide-in flex flex-col">
          <Stars
            rating={item.rating}
            label={t.rating.replace("{n}", String(item.rating))}
          />
          <blockquote className="mt-5 text-slate-300">„{item.quote}"</blockquote>
          <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-accent/15 text-sm font-bold text-accent-light">
              {initials(item.name)}
            </div>
            <div>
              <div className="font-semibold text-white">{item.name}</div>
              <div className="text-sm text-slate-400">{item.role}</div>
            </div>
          </figcaption>
        </figure>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-2" role="tablist" aria-label={t.select}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={t.voice.replace("{n}", String(i + 1))}
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
            aria-label={t.prev}
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 text-slate-200 transition-colors hover:border-accent/50"
          >
            <ArrowRightIcon className="h-4 w-4 rotate-180" />
          </button>
          <button
            onClick={() => go(1)}
            aria-label={t.next}
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 text-slate-200 transition-colors hover:border-accent/50"
          >
            <ArrowRightIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
