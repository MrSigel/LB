"use client";

import { useEffect, useRef } from "react";

/**
 * Dünner Fortschrittsbalken am oberen Rand beim Scrollen.
 *
 * Bewusst ohne Animationsbibliothek und ohne React-State: Der Balken wird
 * direkt per transform gesetzt, das läuft im Compositor und löst kein
 * Re-Rendering aus. Ein State-Update pro Scroll-Frame wäre auf dem Handy
 * spürbar teurer als der Effekt wert ist.
 */
export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const el = ref.current;
      if (!el) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      el.style.transform = `scaleX(${progress})`;
    };

    // Pro Frame höchstens eine Berechnung, egal wie oft das Event feuert.
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transform: "scaleX(0)" }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-accent via-accent-light to-accent"
      aria-hidden="true"
    />
  );
}
