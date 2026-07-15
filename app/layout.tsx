import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://limit-breakers.eu"),
  title: "Unternehmensberatung für planbaren Vertrieb | Limit Breakers",
  description:
    "Wir sind eine Unternehmensberatung mit echter Umsetzung und helfen Energievertrieben, Neukunden systematisch, planbar und skalierbar zu gewinnen – mit Digitalisierung und Automatisierung im PV-, Wärmepumpen- sowie Strom- und Gas-Vertrieb.",
  keywords: [
    "Neukundengewinnung",
    "Energievertrieb",
    "Photovoltaik Leads",
    "Wärmepumpe Leads",
    "Strom Gas Vertrieb",
    "Vertrieb Digitalisierung",
    "Vertrieb Automatisierung",
    "Unternehmensberatung",
  ],
  authors: [{ name: "Limit Breakers" }],
  icons: {
    icon: "/images/brand/favicon.png",
    apple: "/images/brand/favicon.png",
  },
  openGraph: {
    title: "Unternehmensberatung für planbaren Vertrieb | Limit Breakers",
    description:
      "Neukunden systematisch, planbar und skalierbar gewinnen – Digitalisierung und Automatisierung für den Energievertrieb. Beratung mit echter Umsetzung.",
    url: "https://limit-breakers.eu",
    siteName: "Limit Breakers",
    locale: "de_DE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/**
 * Steuert das Scroll-Reveal komplett ohne das React-Bundle.
 *
 * Läuft inline im <head>, also vor dem ersten Paint und ohne Download.
 * Fehlt IntersectionObserver, wird .js gar nicht erst gesetzt und die
 * Inhalte bleiben sichtbar – die Animation ist Zugabe, keine Bedingung.
 * Der MutationObserver fängt Inhalte ab, die bei Seitenwechseln
 * innerhalb der App nachgerendert werden.
 */
const revealScript = `
(function(){
  if(!('IntersectionObserver' in window))return;
  var d=document;d.documentElement.classList.add('js');
  var io=new IntersectionObserver(function(es){
    for(var i=0;i<es.length;i++){if(es[i].isIntersecting){es[i].target.setAttribute('data-revealed','');io.unobserve(es[i].target)}}
  },{rootMargin:'0px 0px -80px 0px'});
  function scan(){
    var n=d.querySelectorAll('.reveal:not([data-revealed])');
    for(var i=0;i<n.length;i++)io.observe(n[i])
  }
  function start(){scan();new MutationObserver(scan).observe(d.body,{childList:true,subtree:true})}
  d.readyState==='loading'?d.addEventListener('DOMContentLoaded',start):start()
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
      </head>
      <body>{children}</body>
    </html>
  );
}
