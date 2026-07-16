"use client";

import { useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/lib/i18n/dictionaries";

const DURATION = 1.1;
const delayFor = (i: number) => 0.15 + i * 0.15;

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Feuert einmalig, sobald das Element ins Bild scrollt. */
function useInView(ref: React.RefObject<HTMLElement>) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref]);

  return inView;
}

/**
 * Client-Insel: nur die Balken zaehlen hoch und wachsen. Ueberschrift und
 * Text der Sektion sind statisch (siehe LimitSkills).
 */
export default function SkillBars({
  labels,
}: {
  labels: Dictionary["skills"]["labels"];
}) {
  const listRef = useRef<HTMLUListElement>(null);
  const inView = useInView(listRef);

  const skills = [
    { label: labels.marketing, value: 99 },
    { label: labels.sales, value: 99 },
    { label: labels.software, value: 99 },
  ];

  return (
    <ul ref={listRef} className="space-y-7">
      {skills.map((skill, i) => (
        <li key={skill.label}>
          <div className="mb-2 flex items-center justify-between">
            <span className="font-semibold text-white">{skill.label}</span>
            <span className="text-sm font-medium tabular-nums text-accent-light">
              <CountUp to={skill.value} start={inView} delay={delayFor(i)} />
            </span>
          </div>
          <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-accent to-accent-light transition-[width] ease-out"
              style={{
                width: inView ? `${skill.value}%` : 0,
                transitionDuration: `${DURATION}s`,
                transitionDelay: `${delayFor(i)}s`,
              }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

/** Zählt von 0 auf den Zielwert hoch, sobald die Balken ins Bild scrollen. */
function CountUp({ to, start, delay }: { to: number; start: boolean; delay: number }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    if (prefersReducedMotion()) {
      setValue(to);
      return;
    }

    let frame = 0;
    let began = 0;

    const step = (now: number) => {
      if (!began) began = now;
      const progress = Math.min((now - began) / (DURATION * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * to));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    const timer = window.setTimeout(() => {
      frame = requestAnimationFrame(step);
    }, delay * 1000);

    return () => {
      window.clearTimeout(timer);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [start, to, delay]);

  return <>{value}%</>;
}
