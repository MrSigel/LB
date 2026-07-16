import Link from "./AppLink";
import Image from "next/image";
import type { CSSProperties } from "react";
import { ArrowRightIcon } from "./icons";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

/** Gestaffelte Verzögerung als CSS-Variable statt per JS-Orchestrierung. */
const riseDelay = (seconds: number) =>
  ({ "--rise-delay": `${seconds}s` }) as CSSProperties;

/**
 * Der Hero animiert beim Laden – das ist reines CSS.
 *
 * Vorher lief das über framer-motion, wodurch Headline, Text und Buttons
 * mit opacity:0 ausgeliefert wurden und erst nach dem Hydrieren erschienen.
 */
export default function Hero({
  locale,
  t,
}: {
  locale: Locale;
  t: Dictionary["hero"];
}) {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-24"
    >
      {/* Hintergrundfoto + Akzent-Verläufe */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Overlay: links deckend für den Headline-Kontrast, rechts offen fürs
            Motiv. Zurückhaltend dosiert, weil das Foto selbst schon dunkel ist. */}
        <div className="absolute inset-0 bg-gradient-to-r from-base-900 via-base-900/75 to-base-900/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-base-900/80 via-transparent to-base-900/30" />
        <div className="absolute inset-0 bg-grid-fade" />
        {/* Akzent-Schein: statische Radial-Verlaeufe statt animierter
            Blur-Flaechen – gleiche Optik, keine GPU-Last pro Frame. */}
        <div className="glow-accent absolute -left-24 top-10 h-[420px] w-[420px] rounded-full" />
        <div className="glow-accent-soft absolute -right-20 bottom-0 h-[460px] w-[460px] rounded-full" />
      </div>

      <div className="container-lb">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl">
            {t.words.map((word, i) => (
              <span
                key={word}
                className="rise mr-[0.25em] inline-block"
                style={riseDelay(0.1 + i * 0.06)}
              >
                {word}
              </span>
            ))}
            {/* Ohne Shimmer: die Endlos-Animation malte die Headline in
                jedem Frame neu. pb haelt die Unterlaenge im bg-clip-Bereich. */}
            <span
              className="rise inline-block bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text pb-[0.16em] text-transparent"
              style={riseDelay(0.1 + t.words.length * 0.06)}
            >
              {t.highlight}
            </span>
          </h1>

          <p
            className="rise mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl"
            style={riseDelay(0.45)}
          >
            {t.body}
          </p>

          <div
            className="rise mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            style={riseDelay(0.6)}
          >
            <Link href={`/${locale}/kontakt`} className="btn-primary">
              {t.ctaPrimary}
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link href={`/${locale}/ueber-uns`} className="btn-ghost">
              {t.ctaSecondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
