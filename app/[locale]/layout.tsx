import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Manrope } from "next/font/google";
import "../globals.css";
import { site } from "@/lib/site";
import { locales, htmlLang, isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import WhatsAppButton from "@/components/WhatsAppButton";
import { OrganisationSchema } from "@/components/StructuredData";

const manrope = Manrope({
  // Kyrillisch fuer Bulgarisch – ohne das faellt die Seite dort auf eine
  // Systemschrift zurueck.
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/** hreflang: sagt Google, welche Sprachfassungen es gibt. */
const languageAlternates = (path: string) =>
  Object.fromEntries([
    ...locales.map((l) => [htmlLang[l], `${site.url}/${l}${path}`]),
    // Fuer alles, was zu keiner Sprache passt.
    ["x-default", `${site.url}/en${path}`],
  ]);

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const locale = params.locale;
  const dict = await getDictionary(locale);
  const title = `${dict.meta.home.title} | ${site.name}`;

  return {
    metadataBase: new URL(site.url),
    title: {
      default: title,
      template: `%s | ${site.name}`,
    },
    description: dict.meta.home.description,
    authors: [{ name: site.name, url: site.url }],
    creator: site.name,
    publisher: site.legalName,
    alternates: {
      canonical: `/${locale}`,
      languages: languageAlternates(""),
    },
    icons: {
      icon: "/images/brand/favicon.png",
      apple: "/images/brand/favicon.png",
    },
    openGraph: {
      title,
      description: dict.meta.home.description,
      url: `${site.url}/${locale}`,
      siteName: site.name,
      locale: htmlLang[locale].replace("-", "_"),
      type: "website",
      images: [{ url: "/images/hero.jpg", width: 2400, height: 1348, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: dict.meta.home.description,
      images: ["/images/hero.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
  };
}

/**
 * Steuert das Scroll-Reveal komplett ohne das React-Bundle.
 *
 * Läuft inline im <head>, also vor dem ersten Paint und ohne Download.
 * Fehlt IntersectionObserver, wird .js gar nicht erst gesetzt und die
 * Inhalte bleiben sichtbar – die Animation ist Zugabe, keine Bedingung.
 *
 * WICHTIG: Der MutationObserver haengt am documentElement und greift,
 * waehrend der Parser die Seite aufbaut. Kein Warten auf DOMContentLoaded –
 * das wartet naemlich auf die deferred Scripts, also genau auf das Bundle,
 * von dem die Einblendung unabhaengig sein soll.
 *
 * Der Observer laeuft weiter und faengt damit auch Inhalte ab, die bei
 * Navigation innerhalb der App nachgerendert werden.
 */
const revealScript = `
(function(){
  if(!('IntersectionObserver' in window))return;
  var d=document;d.documentElement.classList.add('js');
  var io=new IntersectionObserver(function(es){
    for(var i=0;i<es.length;i++){if(es[i].isIntersecting){es[i].target.setAttribute('data-revealed','');io.unobserve(es[i].target)}}
  },{rootMargin:'0px 0px -80px 0px'});
  var pending=0;
  function scan(){
    pending=0;
    var n=d.querySelectorAll('.reveal:not([data-revealed])');
    for(var i=0;i<n.length;i++)io.observe(n[i])
  }
  function schedule(){if(!pending){pending=1;setTimeout(scan,0)}}
  new MutationObserver(schedule).observe(d.documentElement,{childList:true,subtree:true});
  schedule()
})();`;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;
  const dict = await getDictionary(locale);

  return (
    <html lang={htmlLang[locale]} className={manrope.variable}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: revealScript }} />
        <OrganisationSchema locale={locale} />
      </head>
      <body>
        {children}
        <WhatsAppButton t={dict.whatsapp} />
      </body>
    </html>
  );
}
