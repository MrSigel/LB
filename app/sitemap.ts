import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { locales, htmlLang, defaultLocale } from "@/lib/i18n/config";

/**
 * Rechtstexte fehlen bewusst: Sie stehen auf noindex und gehoeren nicht in
 * den Suchindex.
 */
const pages = [
  { path: "", priority: 1, changeFrequency: "monthly" as const },
  { path: "/kompetenzen", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/ueber-uns", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/kontakt", priority: 0.8, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Jede Seite in jeder Sprache, mit Querverweis auf die Schwestern.
  return pages.flatMap(({ path, priority, changeFrequency }) =>
    locales.map((locale) => ({
      url: `${site.url}/${locale}${path}`,
      lastModified,
      changeFrequency,
      priority,
      alternates: {
        languages: Object.fromEntries([
          ...locales.map((l) => [htmlLang[l], `${site.url}/${l}${path}`]),
          ["x-default", `${site.url}/${defaultLocale}${path}`],
        ]),
      },
    }))
  );
}
