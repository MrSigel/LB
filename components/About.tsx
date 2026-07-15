import Image from "next/image";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="ueber-uns" className="section">
      <div className="container-lb">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Bild */}
          <Reveal>
            <div className="group relative overflow-hidden rounded-3xl border border-white/10">
              <Image
                src="/images/about-beratung.jpg"
                alt="Beratungsgespräch mit Kunden – Beratung mit echter Umsetzung"
                width={1200}
                height={1800}
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
                Beratung mit echter Umsetzung
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-300">
                <p>
                  Wir sind eine Unternehmensberatung mit echter Umsetzung und
                  helfen Unternehmen, Neukunden systematisch, planbar und
                  skalierbar zu gewinnen. Im PV- und Wärmepumpen-Leadgeschäft
                  sowie im Strom- und Gas-Vertrieb sind wir selbst aktiv und
                  wissen genau, worauf es ankommt – diese Praxiserfahrung fließt
                  direkt in unsere Beratung ein.
                </p>
                <p>
                  Die Digitalisierung strukturiert und beschleunigt deinen
                  gesamten Vertrieb, während die Automatisierung wiederkehrende
                  Aufgaben übernimmt. Online- und Offline-Maßnahmen greifen
                  nahtlos ineinander, und wir optimieren deine komplette
                  Wertschöpfungskette vom Lead bis zum Abschluss. So arbeitet
                  dein Team motivierter, produktiver und zielgerichteter – und
                  alle Erfolge sind transparent und jederzeit messbar.
                </p>
              </div>
              <p className="mt-6 border-l-2 border-accent pl-5 text-lg font-medium text-white">
                Wir bringen Struktur, Effizienz und messbares Wachstum in deinen
                Vertrieb – mit der Power aus eigener operativer Erfahrung in
                beiden Geschäftsbereichen.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
