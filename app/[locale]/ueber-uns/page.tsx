import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, languageAlternates } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { site } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import { TargetIcon, AutomationIcon, GrowthIcon } from "@/components/icons";

/** Reihenfolge passend zu aboutPage.pillars im Woerterbuch. */
const icons = [TargetIcon, AutomationIcon, GrowthIcon];

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const d = await getDictionary(params.locale);
  return {
    title: d.meta.about.title,
    description: d.meta.about.description,
    alternates: {
      canonical: `/${params.locale}/ueber-uns`,
      languages: languageAlternates(site.url, "/ueber-uns"),
    },
  };
}

export default async function UeberUnsPage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const d = await getDictionary(locale);
  const p = d.aboutPage;

  return (
    <>
      <Header locale={locale} t={d.nav} />
      <main>
        <PageHeader title={p.title} subtitle={p.subtitle} />

        {/* Intro */}
        <section className="section pt-0">
          <div className="container-lb">
            <Reveal>
              <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-slate-300">
                <p>{p.intro1}</p>
                <p>{p.intro2}</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Expertise / Umsetzung / Erfahrung */}
        <section className="section border-y border-white/10 bg-white/[0.02] pt-16">
          <div className="container-lb">
            <div className="grid gap-6 md:grid-cols-3">
              {p.pillars.map((pillar, i) => {
                const Icon = icons[i];
                return (
                  <Reveal key={pillar.title} delay={i * 0.1}>
                    <article className="card group h-full">
                      <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h2 className="mt-6 text-xl font-semibold text-white">
                        {pillar.title}
                      </h2>
                      <p className="mt-3 leading-relaxed text-slate-400">
                        {pillar.text}
                      </p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Philosophie & Werte */}
        <section className="section">
          <div className="container-lb">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {p.valuesTitle}
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {p.values.map((v, i) => (
                <Reveal key={v.title} delay={(i % 3) * 0.08}>
                  <article className="card h-full">
                    <div className="mb-4 h-1 w-10 rounded-full bg-accent" />
                    <h3 className="text-lg font-semibold text-white">{v.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                      {v.text}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Testimonials t={d.testimonials} />
        <Contact locale={locale} t={d.contact} whatsappMessage={d.whatsapp.message} />
      </main>
      <Footer locale={locale} t={d.footer} homeAria={d.nav.home_aria} />
    </>
  );
}
