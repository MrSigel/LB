import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Kontakt – dein Weg zu planbarem Vertrieb",
  description:
    "Melde dich für ein kostenloses Erstgespräch: per WhatsApp, telefonisch unter +359 895 500 755 oder per E-Mail an info@limit-breakers.eu.",
  alternates: { canonical: "/kontakt" },
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
