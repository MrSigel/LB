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
import { GrowthIcon, DealIcon, AutomationIcon } from "@/components/icons";

/** Reihenfolge passend zu competenciesPage.areas im Woerterbuch. */
const icons = [GrowthIcon, DealIcon, AutomationIcon];

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const d = await getDictionary(params.locale);
  return {
    title: d.meta.competencies.title,
    description: d.meta.competencies.description,
    alternates: {
      canonical: `/${params.locale}/kompetenzen`,
      languages: languageAlternates(site.url, "/kompetenzen"),
    },
  };
}

export default async function KompetenzenPage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const d = await getDictionary(locale);
  const p = d.competenciesPage;

  return (
    <>
      <Header locale={locale} t={d.nav} />
      <main>
        <PageHeader title={p.title} subtitle={p.subtitle} />

        {/* Intro */}
        <section className="section pt-0">
          <div className="container-lb">
            <Reveal>
              <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
                {p.intro}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Marketing / Vertrieb / Prozesse */}
        <section className="section border-t border-white/10 bg-white/[0.02] pt-16">
          <div className="container-lb space-y-8">
            {p.areas.map((a, i) => {
              const Icon = icons[i];
              return (
                <Reveal key={a.title} delay={i * 0.05}>
                  <article className="card grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-12">
                    {/* Kopf */}
                    <div>
                      <div className="flex items-center gap-4">
                        <span className="text-5xl font-extrabold text-accent/30">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent">
                          <Icon className="h-6 w-6" />
                        </span>
                      </div>
                      <h2 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
                        {a.title}
                      </h2>
                      <p className="mt-4 leading-relaxed text-slate-300">{a.intro}</p>
                    </div>

                    {/* Ziel & Folge */}
                    <div className="grid gap-4 sm:grid-cols-1">
                      <div className="rounded-xl border border-accent/20 bg-accent/[0.06] p-5">
                        <p className="text-xs font-semibold uppercase tracking-wider text-accent-light">
                          {p.goalLabel}
                        </p>
                        <p className="mt-2 leading-relaxed text-slate-200">{a.goal}</p>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                          {a.outcomeLabel}
                        </p>
                        <p className="mt-2 leading-relaxed text-slate-300">{a.outcome}</p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        <Testimonials t={d.testimonials} />
        <Contact locale={locale} t={d.contact} whatsappMessage={d.whatsapp.message} />
      </main>
      <Footer locale={locale} t={d.footer} homeAria={d.nav.home_aria} />
    </>
  );
}
