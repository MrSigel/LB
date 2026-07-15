import Reveal from "./Reveal";
import { TargetIcon, AutomationIcon, GrowthIcon } from "./icons";

const pillars = [
  {
    icon: TargetIcon,
    title: "Expertise",
    text: "Unsere Expertise liegt in der systematischen Neukundengewinnung für Energievertriebe. Wir verbinden Digitalisierung und Automatisierung mit klaren Vertriebsstrukturen – online und offline greifen nahtlos ineinander. Deshalb beraten wir nur, was wir selbst täglich umsetzen.",
  },
  {
    icon: AutomationIcon,
    title: "Umsetzung",
    text: "Umsetzung heißt bei uns anpacken und Ergebnisse schaffen. Wir greifen genau dort ein, wo die Wirkung entsteht, optimieren die komplette Wertschöpfungskette vom Lead bis zum Abschluss und automatisieren alles, was wiederkehrt. Jede Maßnahme ist auf messbaren Umsatz ausgelegt.",
  },
  {
    icon: GrowthIcon,
    title: "Erfahrung",
    text: "Wir arbeiten seit Jahren selbst erfolgreich im Energievertrieb und bringen diese echte Praxis direkt in dein Unternehmen. Ob PV-Leads, Wärmepumpen oder Strom- und Gasabschlüsse – wir kennen beide Seiten des Geschäfts und schaffen nachhaltiges, profitables Wachstum.",
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
