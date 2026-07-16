import { StarIcon } from "./icons";
import type { Dictionary } from "@/lib/i18n/dictionaries";

/**
 * Echte Kundenstimmen von limit-breakers.eu.
 *
 * Hier stehen nur die nicht uebersetzbaren Angaben. Die Zitate und die
 * Rollenbezeichnung kommen aus dem Woerterbuch – die Reihenfolge muss
 * dort mit dieser Liste uebereinstimmen.
 */
const people = [
  { name: "Anja Hasenberg", rating: 5, female: true },
  { name: "Tim Fuhr", rating: 5, female: false },
  { name: "Roxy Cann", rating: 5, female: true },
];

export type Testimonial = {
  name: string;
  role: string;
  rating: number;
  quote: string;
};

/** Fuegt Namen und uebersetzte Zitate zusammen. */
export const buildTestimonials = (t: Dictionary["testimonials"]): Testimonial[] =>
  people.map((p, i) => ({
    name: p.name,
    role: p.female ? t.roleFemale : t.roleMale,
    rating: p.rating,
    quote: t.quotes[i],
  }));

export const initials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("");

export function Stars({ rating, label }: { rating: number; label: string }) {
  return (
    <div className="flex gap-1" role="img" aria-label={label}>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon
          key={i}
          className={i < rating ? "h-5 w-5 text-accent" : "h-5 w-5 text-slate-600"}
        />
      ))}
    </div>
  );
}
