import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, languageAlternates } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { site } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const d = await getDictionary(params.locale);
  return {
    title: d.meta.contact.title,
    description: d.meta.contact.description,
    alternates: {
      canonical: `/${params.locale}/kontakt`,
      languages: languageAlternates(site.url, "/kontakt"),
    },
  };
}

export default async function KontaktPage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const d = await getDictionary(locale);

  return (
    <>
      <Header locale={locale} t={d.nav} />
      <main>
        <PageHeader title={d.contactPage.title} subtitle={d.contactPage.subtitle} />
        <Contact locale={locale} t={d.contact} whatsappMessage={d.whatsapp.message} />
      </main>
      <Footer locale={locale} t={d.footer} homeAria={d.nav.home_aria} />
    </>
  );
}
