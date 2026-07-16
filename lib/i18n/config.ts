/**
 * Sprachen der Seite.
 *
 * Erkennung: Deutsch -> de, Bulgarisch -> bg, alles andere -> en.
 * Englisch ist damit die Auffangsprache, nicht Deutsch.
 */

export const locales = ["de", "en", "bg"] as const;
export type Locale = (typeof locales)[number];

/** Auffangsprache fuer alle nicht erkannten Sprachen. */
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, { label: string; english: string }> = {
  de: { label: "Deutsch", english: "German" },
  en: { label: "English", english: "English" },
  bg: { label: "Български", english: "Bulgarian" },
};

/** Fuer <html lang> und hreflang. */
export const htmlLang: Record<Locale, string> = {
  de: "de-DE",
  en: "en",
  bg: "bg-BG",
};

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

/**
 * hreflang-Eintraege fuer eine Seite: sagt Google, welche Sprachfassungen
 * es gibt. x-default zeigt auf Englisch, die Auffangsprache.
 *
 * `path` ohne Sprachpraefix, z. B. "/kontakt" oder "" fuer die Startseite.
 */
export function languageAlternates(baseUrl: string, path: string) {
  return Object.fromEntries([
    ...locales.map((l) => [htmlLang[l], `${baseUrl}/${l}${path}`]),
    ["x-default", `${baseUrl}/${defaultLocale}${path}`],
  ]);
}

/**
 * Waehlt die Sprache anhand des Accept-Language-Headers.
 *
 * Bewusst simpel: Wir pruefen nur den Sprachcode vor dem Bindestrich und
 * respektieren die Reihenfolge der Praeferenzen (q-Werte). Deutsch und
 * Bulgarisch werden erkannt, alles Uebrige landet auf Englisch.
 */
export function matchLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return defaultLocale;

  const preferences = acceptLanguage
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.find((p) => p.trim().startsWith("q="));
      return {
        lang: tag.trim().toLowerCase().split("-")[0],
        q: q ? Number.parseFloat(q.split("=")[1]) || 0 : 1,
      };
    })
    .sort((a, b) => b.q - a.q);

  for (const { lang } of preferences) {
    if (lang === "de") return "de";
    if (lang === "bg") return "bg";
    if (lang === "en") return "en";
  }

  return defaultLocale;
}
