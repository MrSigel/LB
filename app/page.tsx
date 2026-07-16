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
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Approach />
        <Competencies />
        <BreakBanner />
        <Testimonials />
        <Team />
        <LimitSkills />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
