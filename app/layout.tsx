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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
