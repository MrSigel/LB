import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "AGB – Limit Breakers",
  robots: { index: false, follow: true },
};

export default function AgbPage() {
  return (
    <LegalLayout title="Allgemeine Geschäftsbedingungen">
      {/* PLATZHALTER – bitte durch Ihre AGB ersetzen. */}
      <p>
        Hier folgen die Allgemeinen Geschäftsbedingungen der Limit Breakers.
        Bitte ergänzen Sie die vollständigen, rechtsverbindlichen Regelungen.
      </p>
    </LegalLayout>
  );
}
