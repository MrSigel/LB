import Image from "next/image";
import Reveal from "./Reveal";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export default function About({ t }: { t: Dictionary["about"] }) {
  return (
    <section id="ueber-uns" className="section">
      <div className="container-lb">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Bild */}
          <Reveal>
            <div className="group relative overflow-hidden rounded-3xl border border-white/10">
              <Image
                src="/images/about-beratung.jpg"
                alt={t.imageAlt}
                width={1400}
                height={787}
                className="h-[420px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:h-[520px]"
                sizes="(max-width: 1024px) 90vw, 580px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base-900/70 via-transparent to-transparent" />
            </div>
          </Reveal>

          {/* Text */}
          <Reveal delay={0.1}>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {t.title}
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-300">
                <p>{t.p1}</p>
                <p>{t.p2}</p>
              </div>
              <p className="mt-6 border-l-2 border-accent pl-5 text-lg font-medium text-white">
                {t.quote}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
