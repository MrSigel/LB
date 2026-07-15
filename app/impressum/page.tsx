import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Impressum – Limit Breakers",
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <LegalLayout title="Impressum">
      {/* Angaben teilweise Platzhalter – Handelsregister/USt-IdNr. ergänzen. */}
      <p>Angaben gemäß den gesetzlichen Vorgaben.</p>
      <p>
        LIMITBREAKERS OOD
        <br />
        Shipka 36
        <br />
        1504 Sofia, Bulgarien
      </p>
      <p>
        Telefon: +359 895 500 755
        <br />
        E-Mail: info@limit-breakers.eu
      </p>
      <p className="text-slate-500">
        Verantwortlich für den Inhalt, Handelsregister-Nr. und USt-IdNr. hier
        ergänzen.
      </p>
    </LegalLayout>
  );
}
