import Reveal from "./Reveal";
import ContactForm from "./ContactForm";
import { PhoneIcon, MailIcon, PinIcon, WhatsAppIcon } from "./icons";
import { site, whatsappHref } from "@/lib/site";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type ContactDetail = {
  Icon: typeof PhoneIcon;
  label: string;
  href: string | null;
  /** Oeffnet in neuem Tab (WhatsApp Web/App). */
  external?: boolean;
};

/**
 * Server-Komponente: Ueberschrift, Text und Kontaktdaten sind statisch.
 * Nur das Formular ist eine Client-Insel (ContactForm) und wird als
 * einziger Teil hydriert.
 */
export default function Contact({
  locale,
  t,
  whatsappMessage,
}: {
  locale: Locale;
  t: Dictionary["contact"];
  whatsappMessage: string;
}) {
  const contactDetails: ContactDetail[] = [
    { Icon: WhatsAppIcon, label: t.whatsapp, href: whatsappHref(whatsappMessage), external: true },
    { Icon: PhoneIcon, label: site.phoneDisplay, href: `tel:${site.phone}` },
    { Icon: MailIcon, label: site.email, href: `mailto:${site.email}` },
    {
      Icon: PinIcon,
      label: `${site.address.street}, ${site.address.postalCode} ${site.address.city}`,
      href: null,
    },
  ];

  return (
    <section id="kontakt" className="section">
      <div className="container-lb">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-base-800 to-base-900 p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Linke Spalte: CTA-Text */}
            <Reveal>
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {t.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-slate-300">
                  {t.subtitle}
                </p>

                <ul className="mt-8 space-y-4">
                  {contactDetails.map(({ Icon, label, href, external }) => (
                    <li key={label}>
                      {href ? (
                        <a
                          href={href}
                          {...(external && { target: "_blank", rel: "noopener noreferrer" })}
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
              <ContactForm locale={locale} t={t.form} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
