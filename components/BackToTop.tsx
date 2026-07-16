"use client";

import { ArrowUpIcon } from "./icons";

/** Sanfter Scroll nach oben – funktioniert auf allen Seiten. */
export default function BackToTop({
  label,
  aria,
}: {
  label: string;
  aria: string;
}) {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="group inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-white"
      aria-label={aria}
    >
      <span className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-accent/50 group-hover:text-accent">
        <ArrowUpIcon className="h-4 w-4" />
      </span>
      {label}
    </button>
  );
}
