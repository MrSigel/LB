import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import { TargetIcon, AutomationIcon, GrowthIcon } from "@/components/icons";

export const metadata: Metadata = {
  // Die Marke haengt das Template aus dem Root-Layout an.
  title: "Wer wir sind – Beratung mit echter Umsetzung",
  description:
    "Wir ticken anders – und das sieht man am Erfolg unserer Kunden. Limit Breakers denkt strategisch und setzt um: geballte Kompetenz im Vertrieb erneuerbarer Energien.",
  alternates: { canonical: "/ueber-uns" },
};

const pillars = [
  {
    icon: TargetIcon,
    title: "Expertise",
    text: "Wir sind echte Experten für Energievertriebe und bekannt für hocheffiziente Strukturen und Prozesse. Bei Limitbreakers beschränken wir uns bewusst auf das, was wir selbst täglich beherrschen und erfolgreich umsetzen. Mit tiefem Fachwissen in Digitalisierung, Automatisierung und Neukundengewinnung schaffen wir klare, schlanke Vertriebsstrukturen – online wie offline. Wir beraten nur, was wir selbst können. Das macht den entscheidenden Unterschied.",
  },
  {
    icon: AutomationIcon,
    title: "Umsetzung",
    text: "Als Limitbreakers packen wir genau dort an, wo die größte Hebelwirkung entsteht. Wir tauchen in deine bestehenden Strukturen ein, justieren die richtigen Stellschrauben und setzen Strategien konsequent in die Realität um. Von der Leadgenerierung über den Vertrieb bis zum Abschluss optimieren wir die gesamte Wertschöpfungskette. Wir sind erst zufrieden, wenn sich unsere Arbeit Monat für Monat in spürbarem Umsatz und messbaren Ergebnissen für dich auszahlt.",
  },
  {
    icon: GrowthIcon,
    title: "Erfahrung",
    text: "Wir bringen jahrelange, tiefgreifende Praxiserfahrung aus dem Energievertrieb direkt mit. Limitbreakers verbindet innovative Methoden mit echter Branchenkompetenz – von PV- und Wärmepumpen-Leads bis zu Strom- und Gasabschlüssen. Wir haben bereits mehrfach bewiesen, dass wir Unternehmen spürbar nach vorne bringen. Mit diesem Wissen brechen wir gemeinsam Ziele und erzielen nachhaltige Umsatzsteigerungen.",
  },
];

const values = [
  {
    title: "Philosophie und Werte",
    text: "Wir sind die umsetzungsstarke Managementberatung, die nicht nur plant, sondern konsequent handelt. Mit innovativen Methoden, partnerschaftlichem Denken und absoluter Konsequenz schaffen wir nachhaltige Wertsteigerung für mittelständische Unternehmen und internationale Konzerne. Wir verändern Strukturen, optimieren Prozesse und bewegen Menschen Richtung Erfolg. Bei uns steht messbarer Mehrwert für unsere Kunden immer im Mittelpunkt.",
  },
  {
    title: "Miss uns an unseren Ergebnissen",
    text: "Limitbreakers gibt sich nicht mit schönen Konzepten auf Papier zufrieden. Wir begleiten dich bei der Strategieentwicklung und bei jedem einzelnen Umsetzungsschritt. Wir wecken Begeisterung für Veränderung auf allen Ebenen, schöpfen das volle Potenzial deiner Mitarbeiter aus und sorgen dafür, dass du von echten, messbaren Ergebnissen und deutlichen Umsatzsteigerungen profitierst. Unsere Arbeit muss sich rechnen – Punkt.",
  },
  {
    title: "Unser Leitbild",
    text: "Für uns ist es selbstverständlich, unseren Kunden messbaren Mehrwert zu liefern, Nachhaltigkeit aktiv zu leben und für unser Handeln volle Verantwortung zu übernehmen. Diese Werte sind die Basis unserer Arbeit. Sie sorgen dafür, dass jede Zusammenarbeit langfristig, vertrauensvoll und extrem erfolgreich wird.",
  },
  {
    title: "Unsere Kunden",
    text: "Unsere Kunden sind Unternehmen aus der erneuerbaren Energiebranche, die Produkte und Dienstleistungen an Privat- und Gewerbekunden verkaufen. Im Mittelpunkt unserer Arbeit steht immer ein Ziel: der bestmögliche Nutzen für dich. Nur so entsteht eine langjährige, vertrauensvolle und extrem erfolgreiche Partnerschaft.",
  },
  {
    title: "Unsere Mitarbeiter",
    text: "Leistungsstarke, hochmotivierte und charakterstarke Mitarbeiter sind die Basis deines Erfolgs. Die Zusammenarbeit mit Limitbreakers ist geprägt von Integrität, gegenseitigem Respekt, Wachstum und absoluter Zuverlässigkeit. Wir honorieren diese Haltung mit sicheren Arbeitsplätzen und leistungsgerechter Vergütung – denn nur starke Menschen bringen starke Ergebnisse.",
  },
  {
    title: "Wettbewerb",
    text: "Limitbreakers nimmt für sich eine qualitativ führende Position im Markt in Anspruch. Die hohe Qualifikation, die breite Ausbildung und die intensive Praxiserfahrung unserer Mitarbeiter garantieren eine außergewöhnliche Umsetzungskompetenz. Wir sichern diesen Anspruch durch ständige Innovation und konsequente Weiterentwicklung – damit du immer die beste Leistung bekommst.",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          title="Wer wir sind – Beratung mit echter Umsetzung"
          subtitle="Wir ticken anders – und das sieht man am Erfolg unserer Kunden. Wir denken strategisch, bleiben aber nicht in Analysen und Konzepten stecken. Wir setzen um."
        />

        {/* Intro */}
        <section className="section pt-0">
          <div className="container-lb">
            <Reveal>
              <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-slate-300">
                <p>
                  Wir bewegen Menschen – online wie offline – und das in ganz
                  Europa. Gemeinsam implementieren wir wirkungsvolle Lösungen
                  entlang der gesamten Wertschöpfungskette. So arbeiten deine
                  Mitarbeiter motivierter und produktiver, während du deine
                  Erfolge jederzeit klar und transparent messen kannst.
                </p>
                <p>
                  Erlebe geballte Kompetenz im Vertrieb erneuerbarer Energien –
                  von PV- und Wärmepumpen-Leads bis hin zu Strom- und
                  Gasabschlüssen.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Expertise / Umsetzung / Erfahrung */}
        <section className="section border-y border-white/10 bg-white/[0.02] pt-16">
          <div className="container-lb">
            <div className="grid gap-6 md:grid-cols-3">
              {pillars.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.1}>
                  <article className="card group h-full">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                      <p.icon className="h-6 w-6" />
                    </div>
                    <h2 className="mt-6 text-xl font-semibold text-white">
                      {p.title}
                    </h2>
                    <p className="mt-3 leading-relaxed text-slate-400">
                      {p.text}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophie & Werte */}
        <section className="section">
          <div className="container-lb">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Philosophie &amp; Werte
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={(i % 3) * 0.08}>
                  <article className="card h-full">
                    <div className="mb-4 h-1 w-10 rounded-full bg-accent" />
                    <h3 className="text-lg font-semibold text-white">
                      {v.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                      {v.text}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
