import type { Locale } from "../config";
import de from "./de";

/**
 * Der Typ wird aus dem deutschen Woerterbuch abgeleitet.
 *
 * Fehlt in en.ts oder bg.ts ein Schluessel, schlaegt der Build fehl –
 * eine vergessene Uebersetzung faellt damit beim Bauen auf und nicht
 * erst dem Besucher.
 */
export type Dictionary = typeof de;

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  de: async () => de,
  en: async () => (await import("./en")).default,
  bg: async () => (await import("./bg")).default,
};

export const getDictionary = (locale: Locale): Promise<Dictionary> =>
  dictionaries[locale]();
