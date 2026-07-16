"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { locales, localeNames, isLocale, type Locale } from "@/lib/i18n/config";
import { GlobeIcon } from "./icons";

/**
 * Sprachwahl in der Navigation.
 *
 * Wechselt nur das Sprachpraefix im Pfad, die Seite bleibt also dieselbe.
 * Die Wahl wird per Cookie festgehalten (siehe middleware) und schlaegt
 * danach die Browsereinstellung.
 */
export default function LanguageSwitcher({
  locale,
  label,
  className = "",
}: {
  locale: Locale;
  /** Vorlesbare Beschriftung, z. B. „Sprache wählen“. */
  label: string;
  className?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Klick daneben und Escape schliessen.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const switchTo = (next: Locale) => {
    // Erstes Segment ist die Sprache – nur die wird ersetzt.
    const segments = pathname.split("/");
    if (isLocale(segments[1])) segments[1] = next;
    else segments.splice(1, 0, next);
    setOpen(false);
    router.push(segments.join("/") || `/${next}`);
    router.refresh();
  };

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={label}
        aria-expanded={open}
        aria-haspopup="listbox"
        className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-3 py-2 text-sm font-semibold text-slate-200 transition-colors hover:border-accent/50 hover:text-white"
      >
        <GlobeIcon className="h-4 w-4 text-accent" />
        <span className="uppercase">{locale}</span>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="M1 1l4 4 4-4" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={label}
          className="absolute right-0 top-full z-50 mt-2 min-w-[10rem] overflow-hidden rounded-xl border border-white/10 bg-base-800 py-1 shadow-xl shadow-black/50"
        >
          {locales.map((l) => (
            <li key={l}>
              <button
                type="button"
                role="option"
                aria-selected={l === locale}
                onClick={() => switchTo(l)}
                className={`flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-sm transition-colors hover:bg-white/5 ${
                  l === locale ? "font-semibold text-accent-light" : "text-slate-200"
                }`}
              >
                {localeNames[l].label}
                <span className="text-xs uppercase text-slate-500">{l}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
