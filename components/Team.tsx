import Image from "next/image";
import Reveal from "./Reveal";
import type { Dictionary } from "@/lib/i18n/dictionaries";

/** Namen und Fotos sind fest, nur die Rollenbezeichnung wird uebersetzt. */
const members = [
  { name: "Lisa Tuana", role: "accounting", photo: "/images/team/lisa-tuana.jpg" },
  { name: "Sonja Ludwig", role: "backoffice", photo: "/images/team/sonja-liebel.jpg" },
  { name: "Marc Klaus", role: "sales", photo: "/images/team/marc-klaus.jpg" },
  { name: "Joachim Schmitz", role: "sales", photo: "/images/team/joachim-schmitz.jpg" },
] as const;

export default function Team({ t }: { t: Dictionary["team"] }) {
  return (
    <section id="team" className="section border-y border-white/10 bg-white/[0.02]">
      <div className="container-lb">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t.title}
            </h2>
            <p className="mt-4 text-lg text-slate-300">{t.subtitle}</p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {members.map((m, i) => {
            const role = t.roles[m.role];
            return (
              <Reveal key={m.name} delay={i * 0.08}>
                <article className="card group h-full overflow-hidden p-0">
                  <div className="relative aspect-square w-full overflow-hidden">
                    <Image
                      src={m.photo}
                      alt={`${m.name} – ${role}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 45vw, 280px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-base-900/60 to-transparent" />
                  </div>
                  <div className="p-5 text-center sm:p-6">
                    <h3 className="text-lg font-semibold text-white">{m.name}</h3>
                    <p className="mt-1 text-sm font-medium text-accent-light">{role}</p>
                    {/* Akzentlinie wächst beim Hover aus der Mitte */}
                    <span className="mx-auto mt-3 block h-0.5 w-0 rounded-full bg-accent transition-all duration-300 group-hover:w-10" />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
