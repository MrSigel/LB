# Limit Breakers – One-Page-Website

Moderne, responsive One-Page-Website für **Limit Breakers** (limit-breakers.de),
Unternehmensberatung für planbare Neukundengewinnung im Energievertrieb
(PV, Wärmepumpe, Strom & Gas).

## Tech-Stack

- **Next.js 14** (App Router)
- **Tailwind CSS**
- **Framer Motion** (Scroll-Reveal- & Micro-Animationen)
- **TypeScript**
- Font: **Manrope** (via `next/font`)

## Entwicklung

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Produktions-Build
npm start        # Produktions-Server
```

## Struktur

Alle Sektionen liegen als eigenständige Komponenten in `components/` und werden
in `app/page.tsx` zusammengesetzt:

1. `Hero` – Slogan, CTA, animierter Gradient-Hintergrund
2. `TrustBar` – Tätigkeitsfelder (PV, Wärmepumpe, Strom & Gas)
3. `About` – „Beratung mit echter Umsetzung“ + Energie-Bild
4. `Approach` – Unser Ansatz: Expertise · Umsetzung · Erfahrung
5. `Competencies` – Kompetenzen mit Energie-Banner + Leistungs-Tags
6. `BreakBanner` – „Break the Limit“-CTA-Banner
7. `Testimonials` – Grid (Desktop) / Karussell (Mobile) mit Sternebewertung
8. `Team` – 4 Karten mit echten Fotos
9. `Contact` – finaler CTA + Kontaktformular + Kontaktdaten
10. `Footer` – Kontaktdaten, Rechtslinks, Social Media

Inhalte, Bilder und Kontaktdaten stammen von der Originalseite
**limit-breakers.eu**. Alle Bilder liegen lokal unter `public/images/`.

## Inhalte anpassen

| Was | Wo |
|-----|-----|
| Meta-Description / Titel | `app/layout.tsx` |
| Bilder (Logo, Energie, Team) | `public/images/` |
| Testimonials | `components/Testimonials.tsx` → `testimonials` |
| Kontaktdaten | `components/Footer.tsx`, `components/Contact.tsx` |
| Impressum / Datenschutz / AGB | `app/impressum`, `app/datenschutz`, `app/agb` |
| Formular-Versand (Backend) | `components/Contact.tsx` → `handleSubmit` |

## Design-Tokens

Farben und Animationen sind zentral in `tailwind.config.ts` definiert
(`base.*` = Anthrazit-Basis, `accent.*` = Grün `#10b981`).

## Hinweise

- Das Kontaktformular zeigt aktuell nur eine Frontend-Bestätigung. Für den
  echten Versand eine API-Route (z. B. `app/api/contact/route.ts`) oder einen
  E-Mail-Service anbinden.
- Die Rechtsseiten enthalten **Platzhaltertexte** und müssen vor dem
  Live-Gang durch rechtsverbindliche Inhalte ersetzt werden.
