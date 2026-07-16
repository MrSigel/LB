import Reveal from "./Reveal";
import TestimonialsCarousel from "./TestimonialsCarousel";
import { buildTestimonials, initials, Stars } from "./testimonials-data";
import type { Dictionary } from "@/lib/i18n/dictionaries";

/**
 * Server-Komponente: Ueberschrift und das Desktop-Raster sind statisch und
 * kommen ohne JavaScript aus. Nur das mobile Karussell ist eine Client-Insel.
 */
export default function Testimonials({ t }: { t: Dictionary["testimonials"] }) {
  const testimonials = buildTestimonials(t);

  return (
    <section id="stimmen" className="section">
      <div className="container-lb">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t.title}
            </h2>
          </div>
        </Reveal>

        {/* Raster (Desktop) */}
        <div className="mt-14 hidden gap-6 md:grid md:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.1}>
              <figure className="card flex h-full flex-col">
                <Stars
                  rating={item.rating}
                  label={t.rating.replace("{n}", String(item.rating))}
                />
                <blockquote className="mt-5 flex-1 text-slate-300">
                  „{item.quote}"
                </blockquote>
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
            </Reveal>
          ))}
        </div>

        {/* Karussell (Mobile) – Client-Insel */}
        <TestimonialsCarousel t={t} />
      </div>
    </section>
  );
}
