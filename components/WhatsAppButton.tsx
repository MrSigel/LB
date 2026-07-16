import { WhatsAppIcon } from "./icons";
import { whatsapp } from "@/lib/site";

/**
 * Schwebender WhatsApp-Kontakt unten rechts.
 *
 * In Marken-Rot statt WhatsApp-Gruen, damit er zum Auftritt passt. Die
 * Nachricht ist vorbefuellt, der Nutzer muss nur noch senden.
 *
 * Reiner Link, kein JavaScript – funktioniert auch, bevor die Seite
 * hydriert ist.
 */
export default function WhatsAppButton() {
  return (
    <a
      href={whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Kontakt über WhatsApp aufnehmen"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-0 overflow-hidden rounded-full bg-accent py-3.5 pl-4 pr-4 text-white shadow-lg shadow-black/40 transition-all duration-300 hover:bg-accent-light hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-light sm:bottom-8 sm:right-8"
    >
      <WhatsAppIcon className="h-6 w-6 shrink-0" />
      {/* Text faehrt beim Hover aus – auf Touch bleibt der kompakte Kreis. */}
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:ml-2.5 group-hover:max-w-[10rem]">
        Schreib uns
      </span>
    </a>
  );
}
