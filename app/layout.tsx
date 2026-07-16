import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import WhatsAppButton from "@/components/WhatsAppButton";
import { OrganisationSchema } from "@/components/StructuredData";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const title = "Neukundengewinnung für Energievertriebe | Limit Breakers";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    // Unterseiten setzen nur ihren eigenen Teil, die Marke haengt sich an.
    template: "%s | Limit Breakers",
  },
  description: site.description,
  keywords: [
    "Neukundengewinnung Energievertrieb",
    "Photovoltaik Leads kaufen",
    "Wärmepumpen Leads",
    "Strom und Gas Vertrieb",
    "Leadgenerierung Energie",
    "Vertriebsberatung Photovoltaik",
    "Vertrieb Digitalisierung",
    "Vertrieb Automatisierung",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.legalName,
  alternates: { canonical: "/" },
  icons: {
    icon: "/images/brand/favicon.png",
    apple: "/images/brand/favicon.png",
  },
  openGraph: {
    title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "de_DE",
    type: "website",
    images: [{ url: "/images/hero.jpg", width: 2400, height: 1348, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

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
 * von dem die Einblendung unabhaengig sein soll. Genau daran hing der Text
 * bei langsamer Verbindung minutenlang fest.
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={manrope.variable}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: revealScript }} />
        <OrganisationSchema />
      </head>
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
