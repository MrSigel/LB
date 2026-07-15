import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Kontakt: Ihr Weg zu planbarem Vertrieb | Limit Breakers",
  description:
    "So finden Sie uns: Haben wir Ihr Interesse geweckt? Dann kontaktieren Sie uns – Telefon +359 895 500 755, info@limit-breakers.eu, Shipka 36, 1504 Sofia.",
};

export default function KontaktPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          title="So finden Sie uns"
          subtitle="Haben wir Ihr Interesse geweckt? Dann kontaktieren Sie uns!"
        />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
