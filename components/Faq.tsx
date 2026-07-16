import Reveal from "./Reveal";
import { FaqSchema } from "./StructuredData";

/**
 * Haeufige Fragen.
 *
 * Die Antworten stammen inhaltlich aus den AGB – sie muessen mit diesen
 * uebereinstimmen, sonst entsteht ein Widerspruch zwischen Marketing und
 * Vertragstext. Bei AGB-Aenderungen hier mitziehen.
 *
 * Zusaetzlich als FAQPage ausgezeichnet: Suchmaschinen koennen die Antworten
 * direkt ausspielen, KI-Antwortmaschinen zitieren sie, statt aus dem
 * Fliesstext zu raten.
 */
const faq = [
  {
    q: "Was macht Limit Breakers genau?",
    a: "Wir gewinnen Neukunden für Energievertriebe. Dafür liefern wir qualifizierte Leads für Photovoltaik und Wärmepumpen und bringen Struktur in den Vertrieb – von der Digitalisierung der Abläufe bis zur Automatisierung wiederkehrender Aufgaben. Wir sind selbst im PV-, Wärmepumpen- sowie Strom- und Gas-Vertrieb aktiv.",
  },
  {
    q: "Für wen ist das Leadprogramm gedacht?",
    a: "Ausschließlich für Unternehmen, die Produkte oder Dienstleistungen aus der erneuerbaren Energiebranche an Privat- und Gewerbekunden verkaufen. Das Programm richtet sich an Unternehmer im Sinne von § 14 BGB; Verbraucher sind ausgeschlossen. Angeboten wird es in Deutschland, Österreich und der Schweiz.",
  },
  {
    q: "Wie werden die Leads generiert und qualifiziert?",
    a: "Auf zwei Wegen: über telefonische Akquise und über Online-Formulare. Telefonisch gewonnene Leads werden im Gespräch vorqualifiziert, online gewonnene über das Formular. Anschließend werden alle Leads geprüft und mit einem internen KI-Scoringsystem bewertet.",
  },
  {
    q: "Sind die Leads exklusiv?",
    a: "Ja. Gelieferte Leads sind exklusiv für den Partner und werden nicht mehrfach vermarktet. Die Exklusivität gilt für 12 Wochen ab Übergabe.",
  },
  {
    q: "Was kostet ein Lead?",
    a: "Die Preise werden individuell vereinbart, da sie von Region, Gebiet und Umfang abhängen. Abgerechnet wird ausschließlich auf Guthabenbasis. Jede Bestellung ist einmalig – es gibt kein Abonnement und keine automatische Verlängerung.",
  },
  {
    q: "Wie schnell werden Leads geliefert?",
    a: "Die Lieferzeit hängt von Region und Gebiet ab. Wir setzen kein festes Budget in einer bestimmten Region ein, deshalb kann die Bearbeitungsdauer je nach Nachfrage variieren. Die Lieferung erfolgt per E-Mail als PDF und CSV oder auf Wunsch per API.",
  },
  {
    q: "Was passiert, wenn ein Lead nicht passt?",
    a: "Reklamationen sind innerhalb von 7 Werktagen nach Lieferung per E-Mail an info@limit-breakers.eu möglich. Berechtigte Reklamationen gleichen wir durch Ersatz-Leads aus. Das gilt für telefonisch und online gewonnene Leads gleichermaßen.",
  },
  {
    q: "Garantiert ihr Abschlüsse?",
    a: "Nein. Gegenstand des Vertrages ist die Lieferung qualifizierter Leads. Ob daraus ein Vertrag mit dem Endkunden entsteht, hängt von der Vertriebsarbeit des Partners ab – einen bestimmten Umsatz oder Erfolg schulden wir nicht. Genau deshalb arbeiten wir an den Strukturen dahinter mit.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="section border-t border-white/10">
      <div className="container-lb">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Häufige Fragen
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Das Wichtigste zum Leadprogramm – kurz und ohne Umschweife.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {faq.map((item, i) => (
            <Reveal key={item.q} delay={(i % 2) * 0.08}>
              {/* details/summary: aufklappbar ohne JavaScript. */}
              <details className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] transition-colors hover:border-accent/40">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-6 text-base font-semibold text-white [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span
                    aria-hidden="true"
                    className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-accent/40 text-accent transition-transform duration-300 group-open:rotate-45"
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                      <path d="M5 1v8M1 5h8" />
                    </svg>
                  </span>
                </summary>
                <p className="px-6 pb-6 leading-relaxed text-slate-400">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>

      <FaqSchema items={faq} />
    </section>
  );
}
