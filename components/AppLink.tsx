import Link from "next/link";
import type { ComponentProps } from "react";

/**
 * Interner Link mit abgeschaltetem Prefetch.
 *
 * Next.js laedt sonst alle sichtbaren Ziel-Seiten im Hintergrund vor. Auf
 * einer schmalen Mobilfunk-Leitung nimmt das Bandbreite weg von der Seite,
 * die der Nutzer gerade aufruft. Fuer eine ueberschaubare Broschuerenseite
 * ist der Prefetch die Kosten nicht wert – die Navigation bleibt schnell
 * genug, ohne Fremdseiten vorzuladen.
 *
 * prefetch laesst sich pro Link wieder aktivieren, falls doch gewuenscht.
 */
export default function AppLink({
  prefetch = false,
  ...props
}: ComponentProps<typeof Link>) {
  return <Link prefetch={prefetch} {...props} />;
}
