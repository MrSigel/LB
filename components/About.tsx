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
                alt="Zwei Kollegen im Beratungsgespräch an einem Stehtisch"
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
                Beratung mit echter Umsetzung
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-300">
                <p>
                  Wir sind eine Beratung, die selbst mit anpackt. Wir helfen dir,
                  planbar Neukunden zu gewinnen – ohne Zufall, ohne Bauchgefühl.
                  Im PV- und Wärmepumpen-Geschäft und im Strom- und Gasvertrieb
                  sind wir selbst aktiv. Wir wissen also aus eigener Erfahrung,
                  was funktioniert und was nicht.
                </p>
                <p>
                  Wir bringen Struktur in deinen Vertrieb und automatisieren
                  alles, was sich wiederholt. Online und offline greifen
                  ineinander – vom ersten Lead bis zum Abschluss. Dein Team
                  arbeitet fokussierter, und du siehst jederzeit, was es bringt.
                </p>
              </div>
              <p className="mt-6 border-l-2 border-accent pl-5 text-lg font-medium text-white">
                Struktur, Effizienz und messbares Wachstum – aus eigener Praxis,
                nicht aus dem Lehrbuch.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
