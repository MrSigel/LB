import type { CSSProperties, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Verzögerung in Sekunden für gestaffelte Reveals */
  delay?: number;
  /** Zusätzliche Klassen für den Wrapper */
  className?: string;
  as?: "div" | "li" | "span";
};

/**
 * Dezenter Scroll-Reveal: fadet Inhalte beim Eintritt in den Viewport ein.
 *
 * Bewusst ohne JavaScript-Abhängigkeit: Das Element wird nur versteckt,
 * wenn das Inline-Skript aus dem Layout .js gesetzt hat. Fällt JS aus oder
 * ist es noch nicht geladen, bleibt der Inhalt sichtbar – vorher hing der
 * gesamte Text am React-Bundle und blieb mobil sekundenlang unsichtbar.
 *
 * Respektiert prefers-reduced-motion (siehe globals.css).
 */
export default function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: RevealProps) {
  return (
    <Tag
      className={className ? `reveal ${className}` : "reveal"}
      style={delay ? ({ "--reveal-delay": `${delay}s` } as CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
