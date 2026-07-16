import { StarIcon } from "./icons";

/** Echte Kundenstimmen von limit-breakers.eu. */
export const testimonials = [
  {
    name: "Anja Hasenberg",
    role: "Kundin",
    rating: 5,
    quote:
      "Die Zusammenarbeit mit den Limitbreakers hat mir gezeigt, was Professionalität gepaart mit Zuverlässigkeit bedeutet. Ich fühle mich sehr willkommen und gut beraten. Alle meine Wünsche wurden umgesetzt.",
  },
  {
    name: "Tim Fuhr",
    role: "Kunde",
    rating: 5,
    quote:
      "Kann das Team der Limitbreakers nur weiterempfehlen. Herr Klaus ist auf alle unsere Wünsche eingegangen, Probleme wurden schnell gelöst. Die Kommunikation war super angenehm.",
  },
  {
    name: "Roxy Cann",
    role: "Kundin",
    rating: 5,
    quote:
      "Meine Wünsche und Probleme wurden sofort gelöst – toller Service! Schnelle Umsetzung und ein Mega Team!",
  },
];

export type Testimonial = (typeof testimonials)[number];

export const initials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("");

export function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" role="img" aria-label={`Bewertung: ${rating} von 5 Sternen`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon
          key={i}
          className={i < rating ? "h-5 w-5 text-accent" : "h-5 w-5 text-slate-600"}
        />
      ))}
    </div>
  );
}
