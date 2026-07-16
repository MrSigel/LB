import Reveal from "./Reveal";
import ContactForm from "./ContactForm";
import { PhoneIcon, MailIcon, PinIcon, GlobeIcon } from "./icons";

const contactDetails = [
  { Icon: PhoneIcon, label: "+359 895 500 755", href: "tel:+359895500755" },
  { Icon: MailIcon, label: "info@limit-breakers.eu", href: "mailto:info@limit-breakers.eu" },
  { Icon: GlobeIcon, label: "www.limit-breakers.eu", href: "https://www.limit-breakers.eu" },
  { Icon: PinIcon, label: "Shipka 36, 1504 Sofia", href: null },
];

/**
 * Server-Komponente: Ueberschrift, Text und Kontaktdaten sind statisch.
 * Nur das Formular ist eine Client-Insel (ContactForm) und wird als
 * einziger Teil hydriert.
 */
export default function Contact() {
  return (
    <section id="kontakt" className="section">
      <div className="container-lb">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-base-800 to-base-900 p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Linke Spalte: CTA-Text */}
            <Reveal>
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Lass uns über deinen Vertrieb sprechen
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-slate-300">
                  Im kostenlosen Erstgespräch schauen wir uns deinen Vertrieb an
                  und zeigen dir konkret, wo Luft nach oben ist.
                </p>

                <ul className="mt-8 space-y-4">
                  {contactDetails.map(({ Icon, label, href }) => (
                    <li key={label}>
                      {href ? (
                        <a
                          href={href}
                          className="group flex items-center gap-3 text-slate-200 transition-colors hover:text-white"
                        >
                          <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent/10 text-accent transition-all duration-300 group-hover:scale-110 group-hover:bg-accent/20">
                            <Icon className="h-5 w-5" />
                          </span>
                          {label}
                        </a>
                      ) : (
                        <span className="flex items-center gap-3 text-slate-200">
                          <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent/10 text-accent">
                            <Icon className="h-5 w-5" />
                          </span>
                          {label}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Rechte Spalte: Formular (Client-Insel) */}
            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
