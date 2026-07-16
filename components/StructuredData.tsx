import { site, whatsapp } from "@/lib/site";

/**
 * Strukturierte Daten (JSON-LD, schema.org).
 *
 * Google nutzt sie fuer Rich Results, KI-Antwortmaschinen (ChatGPT,
 * Perplexity, Google AI Overviews) lesen sie, um Fakten ueber ein
 * Unternehmen sicher zu erfassen. Ohne sie muessen sie aus dem Fliesstext
 * raten – deshalb ist das der groesste Hebel fuer Sichtbarkeit in
 * KI-Antworten.
 */

const json = (data: unknown) => ({
  __html: JSON.stringify(data).replace(/</g, "\\u003c"),
});

/** Unternehmen + Website. Gehoert auf jede Seite (steht im Layout). */
export function OrganisationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${site.url}/#organization`,
        name: site.name,
        legalName: site.legalName,
        url: site.url,
        description: site.description,
        email: site.email,
        telephone: site.phone,
        vatID: site.vatId,
        logo: {
          "@type": "ImageObject",
          url: `${site.url}/images/brand/logo-white.png`,
        },
        image: `${site.url}/images/hero.jpg`,
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.street,
          postalCode: site.address.postalCode,
          addressLocality: site.address.city,
          addressCountry: site.address.country,
        },
        areaServed: site.areaServed.map((code) => ({
          "@type": "Country",
          identifier: code,
        })),
        knowsAbout: [
          "Neukundengewinnung",
          "Leadgenerierung für Photovoltaik",
          "Leadgenerierung für Wärmepumpen",
          "Strom- und Gasvertrieb",
          "Vertriebsdigitalisierung",
          "Vertriebsautomatisierung",
        ],
        sameAs: site.social,
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            telephone: site.phone,
            email: site.email,
            availableLanguage: ["de"],
            areaServed: site.areaServed,
          },
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            url: whatsapp.href,
            availableLanguage: ["de"],
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Leistungen",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "PV- und Wärmepumpen-Leads",
                description:
                  "Qualifizierte Leads für Photovoltaik und Wärmepumpen, telefonisch vorqualifiziert und exklusiv für den Partner.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Vertriebsdigitalisierung",
                description:
                  "Struktur und Tempo im Vertrieb: Online- und Offline-Maßnahmen greifen ineinander, Erfolge sind messbar.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Vertriebsautomatisierung",
                description:
                  "Wiederkehrende Aufgaben vom ersten Lead bis zum Abschluss werden automatisiert.",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        description: site.description,
        publisher: { "@id": `${site.url}/#organization` },
        inLanguage: "de-DE",
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={json(data)} />;
}

/** Brotkrumen-Pfad fuer Unterseiten. */
export function BreadcrumbSchema({ items }: { items: { name: string; path: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: site.url },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.name,
        item: `${site.url}${item.path}`,
      })),
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={json(data)} />;
}

/** Fragen und Antworten – Basis fuer Rich Results und KI-Antworten. */
export function FaqSchema({ items }: { items: { q: string; a: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={json(data)} />;
}
