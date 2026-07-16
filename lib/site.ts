/**
 * Zentrale Stammdaten der Seite.
 *
 * Alles, was an mehreren Stellen auftaucht (Domain, Kontakt, Adresse),
 * steht hier einmal – Metadaten, Sitemap, strukturierte Daten und die
 * Kontaktbereiche lesen daraus. Beim Domainwechsel reicht NEXT_PUBLIC_SITE_URL.
 */

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://limit-breakers.de"
).replace(/\/$/, "");

export const site = {
  name: "Limit Breakers",
  legalName: "Limitbreakers OOD",
  url: siteUrl,
  description:
    "Wir gewinnen Neukunden für Energievertriebe – systematisch, planbar und messbar. Beratung mit echter Umsetzung im PV-, Wärmepumpen- sowie Strom- und Gas-Vertrieb.",
  email: "info@limit-breakers.eu",
  phone: "+359895500755",
  phoneDisplay: "+359 895 500 755",
  vatId: "BG206546638",
  address: {
    street: "Shipka 36",
    postalCode: "1504",
    city: "Sofia",
    country: "BG",
    countryName: "Bulgarien",
  },
  /** Gebiete, in denen das Leadprogramm angeboten wird (siehe AGB § 1.2). */
  areaServed: ["DE", "AT", "CH"],
  social: [
    "https://www.facebook.com",
    "https://www.instagram.com",
  ],
} as const;

/**
 * WhatsApp-Kontakt.
 *
 * wa.me erwartet die Nummer international ohne "+" und ohne führende Null:
 * 0151 52400463 -> 49 151 52400463.
 */
const whatsappNumber = "4915152400463";
const whatsappText =
  "Hallo, ich habe mich auf deiner Website umgeschaut und möchte mit dir im Kontakt treten.";

export const whatsapp = {
  number: whatsappNumber,
  display: "+49 151 52400463",
  href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`,
} as const;
