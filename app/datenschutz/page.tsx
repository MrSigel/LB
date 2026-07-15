import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Datenschutz – Limit Breakers",
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <LegalLayout title="Datenschutzerklärung">
      {/* PLATZHALTER – bitte durch eine rechtskonforme Datenschutzerklärung ersetzen. */}
      <p>
        Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Diese
        Datenschutzerklärung informiert Sie über Art, Umfang und Zweck der
        Verarbeitung personenbezogener Daten auf dieser Website.
      </p>
      <h2 className="text-xl font-semibold text-white">Verantwortlicher</h2>
      <p>
        LIMITBREAKERS OOD, Shipka 36, 1504 Sofia, info@limit-breakers.eu
      </p>
      <h2 className="text-xl font-semibold text-white">Kontaktformular</h2>
      <p>
        Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen, werden
        Ihre Angaben zur Bearbeitung der Anfrage verarbeitet. Ergänzen Sie hier
        die vollständigen, rechtskonformen Angaben.
      </p>
    </LegalLayout>
  );
}
