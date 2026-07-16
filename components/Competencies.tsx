import Image from "next/image";
import Reveal from "./Reveal";
import { EnergyIcon, DigitalIcon, AutomationIcon } from "./icons";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export default function Competencies({ t }: { t: Dictionary["competencies"] }) {
  const items = [
    { icon: EnergyIcon, ...t.items.leads },
    { icon: DigitalIcon, ...t.items.digital },
    { icon: AutomationIcon, ...t.items.automation },
  ];

  return (
    <section id="kompetenzen" className="section">
      <div className="container-lb">
        {/* Banner mit echtem Bild */}
        <Reveal>
          <div className="group relative mb-14 overflow-hidden rounded-3xl border border-white/10">
            <Image
              src="/images/kompetenzen-neukundengewinnung.jpg"
              alt={t.bannerAlt}
              width={1800}
              height={1200}
              className="h-64 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:h-80"
              sizes="(max-width: 1152px) 100vw, 1152px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-base-900 via-base-900/70 to-base-900/20" />
            <div className="absolute inset-0 flex items-center p-8 sm:p-12">
              <div className="max-w-xl">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {t.bannerTitle}
                </h2>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Drei Kernkompetenzen */}
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <article className="card group h-full">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-400">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Leistungs-Tags */}
        <Reveal delay={0.15}>
          <ul className="mt-10 flex flex-wrap gap-3">
            {t.services.map((s) => (
              <li key={s} className="tag">
                {s}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
