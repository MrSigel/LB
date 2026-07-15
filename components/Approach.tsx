import Reveal from "./Reveal";
import { TargetIcon, AutomationIcon, GrowthIcon } from "./icons";

const pillars = [
  {
    icon: TargetIcon,
    title: "Expertise",
    text: "Wir kennen den Energievertrieb von innen: klare Strukturen, saubere Prozesse, online wie offline. Und wir beraten nur zu dem, was wir selbst jeden Tag machen.",
  },
  {
    icon: AutomationIcon,
    title: "Umsetzung",
    text: "Umsetzung heißt bei uns: anpacken. Wir gehen dorthin, wo es wirkt – vom ersten Lead bis zum Abschluss – und automatisieren alles, was sich wiederholt. Jede Maßnahme zahlt auf deinen Umsatz ein.",
  },
  {
    icon: GrowthIcon,
    title: "Erfahrung",
    text: "Wir arbeiten seit Jahren selbst im Energievertrieb. Ob PV-Leads, Wärmepumpen oder Strom- und Gasabschlüsse – wir kennen beide Seiten des Geschäfts und bringen diese Praxis direkt zu dir.",
  },
];

export default function Approach() {
  return (
    <section id="ansatz" className="section border-y border-white/10 bg-white/[0.02]">
      <div className="container-lb">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Was uns von klassischen Beratungen unterscheidet
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Wir liefern keine Konzepte für die Schublade, sondern greifen
              operativ ein – dort, wo Umsatz entsteht.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <article className="card group h-full">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">
                  {p.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-400">{p.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
