import Image from "next/image";
import Link from "./AppLink";
import BackToTop from "./BackToTop";
import { site } from "@/lib/site";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import {
  PhoneIcon,
  MailIcon,
  PinIcon,
  GlobeIcon,
  FacebookIcon,
  InstagramIcon,
  GoogleIcon,
  ArrowUpRightIcon,
} from "./icons";

const year = new Date().getFullYear();

const socials = [
  { href: "https://www.facebook.com", label: "Facebook", Icon: FacebookIcon },
  { href: "https://www.instagram.com", label: "Instagram", Icon: InstagramIcon },
  { href: "https://www.google.com", label: "Google", Icon: GoogleIcon },
];

export default function Footer({
  locale,
  t,
  homeAria,
}: {
  locale: Locale;
  t: Dictionary["footer"];
  homeAria: string;
}) {
  const legalLinks = [
    { href: `/${locale}/impressum`, label: t.imprint },
    { href: `/${locale}/datenschutz`, label: t.privacy },
    { href: `/${locale}/agb`, label: t.terms },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-base-900">
      {/* Akzent-Schein oben – statischer Verlauf statt 120px-Blur. */}
      <div
        className="glow-accent-soft pointer-events-none absolute -top-24 left-1/2 h-48 w-[80%] -translate-x-1/2 rounded-full"
        aria-hidden="true"
      />
      <div className="container-lb relative py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Marke */}
          <div>
            <Link href={`/${locale}`} aria-label={homeAria}>
              <Image
                src="/images/brand/logo-white.png"
                alt="Limit Breakers"
                width={640}
                height={132}
                className="h-9 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
              {t.description}
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-300 transition-colors hover:border-accent/50 hover:text-accent"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t.contact}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>
                <a href={`tel:${site.phone}`} className="flex items-center gap-3 transition-colors hover:text-white">
                  <PhoneIcon className="h-4 w-4 text-accent" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-3 transition-colors hover:text-white">
                  <MailIcon className="h-4 w-4 text-accent" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.postalCode} {site.address.city}
                </span>
              </li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t.legal}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Untere Leiste */}
        <div className="relative mt-14 pt-8">
          {/* Gradient-Trennlinie */}
          <div
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
            aria-hidden="true"
          />

          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            <p className="order-2 text-center text-sm text-slate-500 sm:order-1 sm:text-left">
              <span className="text-accent">©</span> {year}{" "}
              <span className="font-semibold text-slate-200">LIMITBREAKERS EOOD</span>
              <span className="mx-2 text-slate-700">·</span>
              {t.rights}
            </p>

            <div className="order-1 flex items-center gap-4 sm:order-2">
              <BackToTop label={t.backToTop} aria={t.backToTopAria} />
              <span className="hidden h-5 w-px bg-white/10 sm:block" aria-hidden="true" />
              <a
                href="https://www.limit-breakers.eu"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-accent/10 hover:text-white"
              >
                <GlobeIcon className="h-4 w-4 text-accent transition-transform duration-500 group-hover:rotate-[25deg]" />
                limit-breakers.eu
                <ArrowUpRightIcon className="h-3.5 w-3.5 text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
