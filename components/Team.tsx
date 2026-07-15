import Image from "next/image";
import Reveal from "./Reveal";

const members = [
  { name: "Lisa Tuana", role: "Accounting", photo: "/images/team/lisa-tuana.jpg" },
  { name: "Sonja Liebel", role: "Backoffice", photo: "/images/team/sonja-liebel.jpg" },
  { name: "Marc Klaus", role: "Sales", photo: "/images/team/marc-klaus.jpg" },
  { name: "Joachim Schmitz", role: "Sales", photo: "/images/team/joachim-schmitz.jpg" },
];

export default function Team() {
  return (
    <section id="team" className="section border-y border-white/10 bg-white/[0.02]">
      <div className="container-lb">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Die Menschen hinter Limit Breakers
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Bei uns arbeiten keine Berater von der Stange, sondern Leute, die
              den Vertrieb selbst machen. Genau die sitzen dir gegenüber.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {members.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08}>
              <article className="card group h-full overflow-hidden p-0">
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src={m.photo}
                    alt={`${m.name} – ${m.role}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 45vw, 280px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-base-900/60 to-transparent" />
                </div>
                <div className="p-5 text-center sm:p-6">
                  <h3 className="text-lg font-semibold text-white">{m.name}</h3>
                  <p className="mt-1 text-sm font-medium text-accent-light">
                    {m.role}
                  </p>
                  {/* Akzentlinie wächst beim Hover aus der Mitte */}
                  <span className="mx-auto mt-3 block h-0.5 w-0 rounded-full bg-accent transition-all duration-300 group-hover:w-10" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
