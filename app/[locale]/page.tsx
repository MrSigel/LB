import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import ScrollProgress from "@/components/ScrollProgress";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import About from "@/components/About";
import Approach from "@/components/Approach";
import Competencies from "@/components/Competencies";
import BreakBanner from "@/components/BreakBanner";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import LimitSkills from "@/components/LimitSkills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default async function Home({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const d = await getDictionary(locale);

  return (
    <>
      <ScrollProgress />
      <Header locale={locale} t={d.nav} />
      <main>
        <Hero locale={locale} t={d.hero} />
        <TrustBar t={d.trustBar} />
        <About t={d.about} />
        <Approach t={d.approach} />
        <Competencies t={d.competencies} />
        <BreakBanner locale={locale} t={d.breakBanner} />
        <Testimonials t={d.testimonials} />
        <Team t={d.team} />
        <LimitSkills t={d.skills} />
        <Contact locale={locale} t={d.contact} whatsappMessage={d.whatsapp.message} />
      </main>
      <Footer locale={locale} t={d.footer} homeAria={d.nav.home_aria} />
    </>
  );
}
