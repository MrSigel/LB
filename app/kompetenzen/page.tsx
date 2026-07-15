import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import { GrowthIcon, DealIcon, AutomationIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Unsere Kompetenzen: Digitalisierung & Vertriebs-Automatisierung",
  description:
    "Marketing, Vertrieb und Prozesse aus einer Hand: Wir gewinnen planbar Neukunden für Energievertriebe – mit messbaren Kampagnen, systematischem Vertrieb und automatisierten Abläufen.",
};

const areas = [
  {
    num: "01",
    icon: GrowthIcon,
    title: "Marketing",
    intro:
      "Das beste Produkt nützt nichts, wenn niemand davon erfährt. In Zeiten der Digitalisierung hat sich das Einkaufsverhalten der Kunden grundlegend verändert. Wer heute erfolgreich sein will, muss die Erwartungen des Marktes nicht nur kennen – er muss sie gezielt und emotional ansprechen.",
    goal: "Ihre Produkte und Leistungen kurz, klar und überzeugend nach außen zu tragen. Mit messbaren, planbaren Marketingkampagnen, die genau die richtigen Interessenten erreichen – und das konstant und skalierbar.",
    outcomeLabel: "Die Folge",
    outcome:
      "Marketing ist längst kein „Nice-to-have“ mehr, sondern der entscheidende Erfolgsfaktor für mittelständische Unternehmen. Viele kämpfen jedoch mit der richtigen Positionierung und verlieren wertvolle Potenziale, weil ihre Botschaften nicht ankommen.",
  },
  {
    num: "02",
    icon: DealIcon,
    title: "Vertrieb",
    intro:
      "Marketing bringt Interessenten – Vertrieb macht daraus zahlende Kunden. Auf einer starken Marketingbasis qualifizieren wir Leads systematisch und führen sie sicher durch den gesamten Verkaufsprozess. Mit klarer Struktur, professioneller Gesprächsführung und modernen Verkaufsmethoden wandeln wir Interesse in Abschlüsse um.",
    goal: "Planbare Neukundengewinnung mit System. Kein Zufall mehr, sondern reproduzierbarer Erfolg durch einen abgestimmten, effizienten Vertriebsprozess quer durch alle Abteilungen.",
    outcomeLabel: "Die Herausforderung",
    outcome:
      "Selbst das beste Produkt verkauft sich nicht von allein. Studien zeigen, dass 88 % der Geschäftsführer und Vertriebsleiter den Vertrieb heute wichtiger einschätzen als das Produkt selbst. Wer hier Schwächen hat, verschenkt massiv Umsatz und Wachstum.",
  },
  {
    num: "03",
    icon: AutomationIcon,
    title: "Prozesse",
    intro:
      "Der entscheidende Unterschied zwischen „gut“ und „herausragend“ liegt in den Prozessen. Schlanke, durchdachte Abläufe ermöglichen es, manuelle Tätigkeiten zu digitalisieren und zu automatisieren. Dadurch sinken Fehlerquoten, Mitarbeiterkosten werden reduziert und wertvolle Ressourcen werden frei – für das, was wirklich zählt: Wachstum und Innovation.",
    goal: "Reibungslose, agile Unternehmensabläufe – intern wie extern. Schnittstellen optimieren, Effizienz steigern und eine Infrastruktur schaffen, die Agilität und höchste Qualität gleichzeitig möglich macht.",
    outcomeLabel: "Die Folge",
    outcome:
      "Neue Verkaufskanäle, digitale Marketinginstrumente und moderne Vertriebswege stellen mittelständische Unternehmen vor große Herausforderungen. Nur wer seine internen Prozesse und IT-Infrastruktur konsequent an die Anforderungen der globalisierten Marktwirtschaft anpasst, kann die Chancen der Digitalisierung wirklich nutzen.",
  },
];

export default function KompetenzenPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          title="Unsere Kompetenzen"
          subtitle="Wir ticken anders – und das macht sich am Erfolg unserer Kunden bemerkbar. Wir denken strategisch, bleiben aber nicht bei Analysen und Konzepten stehen, sondern setzen wirkungsvolle Lösungen entlang der gesamten Wertschöpfungskette um."
        />

        {/* Intro */}
        <section className="section pt-0">
          <div className="container-lb">
            <Reveal>
              <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
                Gemeinsam setzen wir wirkungsvolle Lösungen für die gesamte
                Wertschöpfungskette unserer Kunden um – damit die Mitarbeiter
                Ihres Unternehmens motiviert und produktiv arbeiten und Sie die
                Erfolge messen können. Erleben Sie geballte Kompetenz, wenn es um
                den Vertrieb erneuerbarer Energien geht.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Marketing / Vertrieb / Prozesse */}
        <section className="section border-t border-white/10 bg-white/[0.02] pt-16">
          <div className="container-lb space-y-8">
            {areas.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.05}>
                <article className="card grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-12">
                  {/* Kopf */}
                  <div>
                    <div className="flex items-center gap-4">
                      <span className="text-5xl font-extrabold text-accent/30">
                        {a.num}
                      </span>
                      <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent">
                        <a.icon className="h-6 w-6" />
                      </span>
                    </div>
                    <h2 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
                      {a.title}
                    </h2>
                    <p className="mt-4 leading-relaxed text-slate-300">
                      {a.intro}
                    </p>
                  </div>

                  {/* Ziel & Folge */}
                  <div className="grid gap-4 sm:grid-cols-1">
                    <div className="rounded-xl border border-accent/20 bg-accent/[0.06] p-5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-accent-light">
                        Unser Ziel
                      </p>
                      <p className="mt-2 leading-relaxed text-slate-200">
                        {a.goal}
                      </p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        {a.outcomeLabel}
                      </p>
                      <p className="mt-2 leading-relaxed text-slate-300">
                        {a.outcome}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
