import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Kontakt: Dein Weg zu planbarem Vertrieb | Limit Breakers",
  description:
    "So findest du uns: Haben wir dein Interesse geweckt? Dann melde dich – Telefon +359 895 500 755, info@limit-breakers.eu, Shipka 36, 1504 Sofia.",
};

export default function KontaktPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          title="So findest du uns"
          subtitle="Haben wir dein Interesse geweckt? Dann melde dich!"
        />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
