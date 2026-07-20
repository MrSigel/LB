/**
 * Deutsch – Referenzsprache.
 *
 * Diese Datei definiert zugleich den Typ (siehe dictionaries/index.ts):
 * en.ts und bg.ts muessen exakt dieselben Schluessel haben, sonst
 * schlaegt der Build fehl. Eine vergessene Uebersetzung faellt damit
 * beim Bauen auf, nicht erst dem Besucher.
 */
const de = {
  nav: {
    home: "Home",
    about: "Über uns",
    competencies: "Kompetenzen",
    contact: "Kontakt",
    cta: "Erstgespräch",
    menuOpen: "Menü öffnen",
    menuClose: "Menü schließen",
    mobileNav: "Hauptnavigation mobil",
    mainNav: "Hauptnavigation",
    home_aria: "Limit Breakers – Startseite",
    language: "Sprache",
    languageChange: "Sprache wählen",
  },

  hero: {
    // Als Array, damit die Woerter einzeln eingeblendet werden koennen.
    // Das weiche Trennzeichen (­) haelt lange Woerter auf Handys im Bild.
    words: ["Planbare", "Neukunden­gewinnung", "für"],
    highlight: "Energievertriebe",
    body: "Wir ticken anders – und das merkst du am Erfolg unserer Kunden. Wir sind selbst im PV-, Wärmepumpen- und Energievertrieb aktiv. Was wir dir raten, machen wir jeden Tag selbst.",
    ctaPrimary: "Kostenloses Erstgespräch",
    ctaSecondary: "Mehr über uns",
    imageAlt: "Zwei Kollegen bei der Arbeit im Büro",
  },

  trustBar: {
    aria: "Tätigkeitsfelder",
    claim: "Aktiv im PV-, Wärmepumpen- sowie Strom- und Gas-Vertrieb",
    fields: {
      solar: "Photovoltaik",
      heatPump: "Wärmepumpe",
      energy: "Strom & Gas",
    },
  },

  about: {
    title: "Unternehmensberatung mit echter Umsetzung",
    imageAlt: "Zwei Kollegen im Beratungsgespräch an einem Stehtisch",
    p1: "Wir sind eine Unternehmensberatung, die selbst mit anpackt. Wir helfen dir, planbar Neukunden zu gewinnen – ohne Zufall, ohne Bauchgefühl. Im PV- und Wärmepumpen-Geschäft und im Strom- und Gasvertrieb sind wir selbst aktiv. Wir wissen also aus eigener Erfahrung, was funktioniert und was nicht.",
    p2: "Wir bringen Struktur in deinen Vertrieb und automatisieren alles, was sich wiederholt. Online und offline greifen ineinander – vom ersten Lead bis zum Abschluss. Dein Team arbeitet fokussierter, und du siehst jederzeit, was es bringt.",
    quote: "Struktur, Effizienz und messbares Wachstum – aus eigener Praxis, nicht aus dem Lehrbuch.",
  },

  approach: {
    title: "Was uns von klassischen Beratungen unterscheidet",
    subtitle: "Wir liefern keine Konzepte für die Schublade, sondern greifen operativ ein – dort, wo Umsatz entsteht.",
    pillars: {
      expertise: {
        title: "Expertise",
        text: "Wir kennen den Energievertrieb von innen: klare Strukturen, saubere Prozesse, online wie offline. Und wir beraten nur zu dem, was wir selbst jeden Tag machen.",
      },
      execution: {
        title: "Umsetzung",
        text: "Umsetzung heißt bei uns: anpacken. Wir gehen dorthin, wo es wirkt – vom ersten Lead bis zum Abschluss – und automatisieren alles, was sich wiederholt. Jede Maßnahme zahlt auf deinen Umsatz ein.",
      },
      experience: {
        title: "Erfahrung",
        text: "Wir arbeiten seit Jahren selbst im Energievertrieb. Ob PV-Leads, Wärmepumpen oder Strom- und Gasabschlüsse – wir kennen beide Seiten des Geschäfts und bringen diese Praxis direkt zu dir.",
      },
    },
  },

  competencies: {
    bannerTitle: "Systematische Neukundengewinnung für Energievertriebe",
    bannerAlt: "Zwei Personen im Gespräch in einem Besprechungsbereich",
    items: {
      leads: {
        title: "Energie-Leadgeschäft",
        text: "Wir sind selbst im PV-, Wärmepumpen- und Energievertrieb unterwegs. Deshalb wissen wir, welche Leads wirklich zum Abschluss führen – und welche nur die Statistik schön machen.",
      },
      digital: {
        title: "Digitalisierung",
        text: "Wir bringen Tempo und Struktur in deinen Vertrieb. Online und offline greifen ineinander, und du siehst jederzeit schwarz auf weiß, was funktioniert.",
      },
      automation: {
        title: "Automatisierung",
        text: "Alles, was sich wiederholt, übernimmt die Technik – vom ersten Lead bis zum Abschluss. Dein Vertrieb wird schneller und schlanker, dein Team hat den Kopf frei für Kunden.",
      },
    },
    services: [
      "Systematische Neukundengewinnung",
      "PV-Leadgeschäft",
      "Wärmepumpen-Leadgeschäft",
      "Strom- & Gas-Vertrieb",
      "Vertriebsprozessoptimierung",
      "Lead-to-Abschluss Wertschöpfungskette",
    ],
  },

  breakBanner: {
    title: "Miss uns an unseren Ergebnissen",
    principles: [
      "Wir sind bei jedem Schritt dabei.",
      "Wir lassen kein Potenzial liegen.",
      "Am Ende zählt dein Umsatz.",
    ],
    cta: "Jetzt Erstgespräch sichern",
  },

  testimonials: {
    title: "Was unsere Kunden sagen",
    roleFemale: "Kundin",
    roleMale: "Kunde",
    // {n} wird im Bauteil ersetzt. Keine Funktionen im Woerterbuch: die
    // Werte gehen auch an Client-Komponenten, und Funktionen lassen sich
    // ueber die Server/Client-Grenze nicht uebergeben.
    rating: "Bewertung: {n} von 5 Sternen",
    select: "Kundenstimmen auswählen",
    voice: "Stimme {n}",
    prev: "Vorherige Stimme",
    next: "Nächste Stimme",
    quotes: [
      "Die Zusammenarbeit mit den Limitbreakers hat mir gezeigt, was Professionalität gepaart mit Zuverlässigkeit bedeutet. Ich fühle mich sehr willkommen und gut beraten. Alle meine Wünsche wurden umgesetzt.",
      "Kann das Team der Limitbreakers nur weiterempfehlen. Herr Klaus ist auf alle unsere Wünsche eingegangen, Probleme wurden schnell gelöst. Die Kommunikation war super angenehm.",
      "Meine Wünsche und Probleme wurden sofort gelöst – toller Service! Schnelle Umsetzung und ein Mega Team!",
    ],
  },

  team: {
    title: "Die Menschen hinter Limit Breakers",
    subtitle: "Bei uns arbeiten keine Berater von der Stange, sondern Leute, die den Vertrieb selbst machen. Genau die sitzen dir gegenüber.",
    roles: {
      accounting: "Buchhaltung",
      backoffice: "Backoffice",
      sales: "Vertrieb",
    },
  },

  skills: {
    title: "Wofür wir stehen",
    subtitle: "Qualität und Umsetzung. Wir entwickeln uns ständig weiter – und messen uns an dem, was am Ende dabei rauskommt.",
    labels: {
      marketing: "Marketing",
      sales: "Vertrieb",
      software: "Software",
    },
  },

  contact: {
    title: "Lass uns über deinen Vertrieb sprechen",
    subtitle: "Im kostenlosen Erstgespräch schauen wir uns deinen Vertrieb an und zeigen dir konkret, wo Luft nach oben ist.",
    whatsapp: "WhatsApp: sofort schreiben",
    form: {
      firstName: "Vorname",
      lastName: "Nachname",
      email: "E-Mail",
      message: "Nachricht",
      messagePlaceholder: "Worum geht's? Erzähl kurz von deinem Vertrieb.",
      privacyBefore: "Ich habe die",
      privacyLink: "Datenschutzerklärung",
      privacyAfter: "gelesen und stimme der Verarbeitung meiner Daten zu.",
      honeypot: "Website (bitte frei lassen)",
      submit: "Nachricht senden",
      sending: "Wird gesendet …",
      success: "Danke! Deine Nachricht ist da – wir melden uns innerhalb von 24 Stunden.",
      errorGeneric: "Da ist etwas schiefgelaufen. Bitte versuch es erneut.",
      errorOffline: "Keine Verbindung zum Server. Bist du online?",
      // Die API liefert nur Fehlercodes, uebersetzt wird hier.
      errorFields: "Bitte fülle alle Felder aus.",
      errorTooLong: "Eine der Angaben ist zu lang.",
      errorEmail: "Diese E-Mail-Adresse sieht nicht gültig aus.",
      errorPrivacy: "Bitte stimme der Datenschutzerklärung zu.",
      errorNotConfigured: "Der Mailversand ist derzeit nicht eingerichtet. Bitte schreib uns direkt an info@limit-breakers.eu.",
      errorSend: "Die Nachricht konnte nicht gesendet werden. Bitte versuch es später erneut.",
    },
  },

  footer: {
    description: "Unternehmensberatung mit echter Umsetzung. Wir gewinnen Neukunden für Energievertriebe – systematisch, planbar und skalierbar.",
    contact: "Kontakt",
    legal: "Rechtliches",
    imprint: "Impressum",
    privacy: "Datenschutz",
    terms: "AGB & Widerruf",
    rights: "Alle Rechte vorbehalten.",
    backToTop: "Nach oben",
    backToTopAria: "Nach oben scrollen",
  },

  whatsapp: {
    label: "Schreib uns",
    aria: "Kontakt über WhatsApp aufnehmen",
    // Vorbefuellte Nachricht im WhatsApp-Fenster.
    message: "Hallo, ich habe mich auf deiner Website umgeschaut und möchte mit dir im Kontakt treten.",
  },

  legal: {
    backHome: "← Zurück zur Startseite",
    // Hinweis auf den Rechtsseiten in EN/BG: Der Text bleibt bewusst deutsch.
    germanOnly: "",
  },

  aboutPage: {
    title: "Wer wir sind – Unternehmensberatung mit echter Umsetzung",
    subtitle: "Wir ticken anders – und das sieht man am Erfolg unserer Kunden. Wir denken strategisch, bleiben aber nicht in Analysen und Konzepten stecken. Wir setzen um.",
    intro1: "Wir bewegen Menschen – online wie offline – und das in ganz Europa. Gemeinsam implementieren wir wirkungsvolle Lösungen entlang der gesamten Wertschöpfungskette. So arbeiten deine Mitarbeiter motivierter und produktiver, während du deine Erfolge jederzeit klar und transparent messen kannst.",
    intro2: "Erlebe geballte Kompetenz im Vertrieb erneuerbarer Energien – von PV- und Wärmepumpen-Leads bis hin zu Strom- und Gasabschlüssen.",
    pillars: [
      {
        title: "Expertise",
        text: "Wir sind echte Experten für Energievertriebe und bekannt für hocheffiziente Strukturen und Prozesse. Bei Limitbreakers beschränken wir uns bewusst auf das, was wir selbst täglich beherrschen und erfolgreich umsetzen. Mit tiefem Fachwissen in Digitalisierung, Automatisierung und Neukundengewinnung schaffen wir klare, schlanke Vertriebsstrukturen – online wie offline. Wir beraten nur, was wir selbst können. Das macht den entscheidenden Unterschied.",
      },
      {
        title: "Umsetzung",
        text: "Als Limitbreakers packen wir genau dort an, wo die größte Hebelwirkung entsteht. Wir tauchen in deine bestehenden Strukturen ein, justieren die richtigen Stellschrauben und setzen Strategien konsequent in die Realität um. Von der Leadgenerierung über den Vertrieb bis zum Abschluss optimieren wir die gesamte Wertschöpfungskette. Wir sind erst zufrieden, wenn sich unsere Arbeit Monat für Monat in spürbarem Umsatz und messbaren Ergebnissen für dich auszahlt.",
      },
      {
        title: "Erfahrung",
        text: "Wir bringen jahrelange, tiefgreifende Praxiserfahrung aus dem Energievertrieb direkt mit. Limitbreakers verbindet innovative Methoden mit echter Branchenkompetenz – von PV- und Wärmepumpen-Leads bis zu Strom- und Gasabschlüssen. Wir haben bereits mehrfach bewiesen, dass wir Unternehmen spürbar nach vorne bringen. Mit diesem Wissen brechen wir gemeinsam Ziele und erzielen nachhaltige Umsatzsteigerungen.",
      },
    ],
    valuesTitle: "Philosophie & Werte",
    values: [
      {
        title: "Philosophie und Werte",
        text: "Wir sind die umsetzungsstarke Managementberatung, die nicht nur plant, sondern konsequent handelt. Mit innovativen Methoden, partnerschaftlichem Denken und absoluter Konsequenz schaffen wir nachhaltige Wertsteigerung für mittelständische Unternehmen und internationale Konzerne. Wir verändern Strukturen, optimieren Prozesse und bewegen Menschen Richtung Erfolg. Bei uns steht messbarer Mehrwert für unsere Kunden immer im Mittelpunkt.",
      },
      {
        title: "Miss uns an unseren Ergebnissen",
        text: "Limitbreakers gibt sich nicht mit schönen Konzepten auf Papier zufrieden. Wir begleiten dich bei der Strategieentwicklung und bei jedem einzelnen Umsetzungsschritt. Wir wecken Begeisterung für Veränderung auf allen Ebenen, schöpfen das volle Potenzial deiner Mitarbeiter aus und sorgen dafür, dass du von echten, messbaren Ergebnissen und deutlichen Umsatzsteigerungen profitierst. Unsere Arbeit muss sich rechnen – Punkt.",
      },
      {
        title: "Unser Leitbild",
        text: "Für uns ist es selbstverständlich, unseren Kunden messbaren Mehrwert zu liefern, Nachhaltigkeit aktiv zu leben und für unser Handeln volle Verantwortung zu übernehmen. Diese Werte sind die Basis unserer Arbeit. Sie sorgen dafür, dass jede Zusammenarbeit langfristig, vertrauensvoll und extrem erfolgreich wird.",
      },
      {
        title: "Unsere Kunden",
        text: "Unsere Kunden sind Unternehmen aus der erneuerbaren Energiebranche, die Produkte und Dienstleistungen an Privat- und Gewerbekunden verkaufen. Im Mittelpunkt unserer Arbeit steht immer ein Ziel: der bestmögliche Nutzen für dich. Nur so entsteht eine langjährige, vertrauensvolle und extrem erfolgreiche Partnerschaft.",
      },
      {
        title: "Unsere Mitarbeiter",
        text: "Leistungsstarke, hochmotivierte und charakterstarke Mitarbeiter sind die Basis deines Erfolgs. Die Zusammenarbeit mit Limitbreakers ist geprägt von Integrität, gegenseitigem Respekt, Wachstum und absoluter Zuverlässigkeit. Wir honorieren diese Haltung mit sicheren Arbeitsplätzen und leistungsgerechter Vergütung – denn nur starke Menschen bringen starke Ergebnisse.",
      },
      {
        title: "Wettbewerb",
        text: "Limitbreakers nimmt für sich eine qualitativ führende Position im Markt in Anspruch. Die hohe Qualifikation, die breite Ausbildung und die intensive Praxiserfahrung unserer Mitarbeiter garantieren eine außergewöhnliche Umsetzungskompetenz. Wir sichern diesen Anspruch durch ständige Innovation und konsequente Weiterentwicklung – damit du immer die beste Leistung bekommst.",
      },
    ],
  },

  competenciesPage: {
    title: "Unsere Kompetenzen",
    subtitle: "Wir ticken anders – und das macht sich am Erfolg unserer Kunden bemerkbar. Wir denken strategisch, bleiben aber nicht bei Analysen und Konzepten stehen, sondern setzen wirkungsvolle Lösungen entlang der gesamten Wertschöpfungskette um.",
    intro: "Wir setzen gemeinsam mit dir um – vom ersten Lead bis zum Abschluss. Dein Team arbeitet motivierter und produktiver, und du kannst die Erfolge messen. Erleb geballte Kompetenz, wenn es um den Vertrieb erneuerbarer Energien geht.",
    goalLabel: "Unser Ziel",
    areas: [
      {
        title: "Marketing",
        intro: "Das beste Produkt nützt nichts, wenn niemand davon erfährt. In Zeiten der Digitalisierung hat sich das Einkaufsverhalten der Kunden grundlegend verändert. Wer heute erfolgreich sein will, muss die Erwartungen des Marktes nicht nur kennen – er muss sie gezielt und emotional ansprechen.",
        goal: "Deine Produkte und Leistungen kurz, klar und überzeugend nach außen zu tragen. Mit messbaren Kampagnen, die genau die richtigen Interessenten erreichen – verlässlich, Monat für Monat.",
        outcomeLabel: "Die Folge",
        outcome: "Marketing ist längst kein „Nice-to-have“ mehr, sondern der entscheidende Erfolgsfaktor für mittelständische Unternehmen. Viele kämpfen jedoch mit der richtigen Positionierung und verlieren wertvolle Potenziale, weil ihre Botschaften nicht ankommen.",
      },
      {
        title: "Vertrieb",
        intro: "Marketing bringt Interessenten – Vertrieb macht daraus zahlende Kunden. Auf einer starken Marketingbasis qualifizieren wir Leads systematisch und führen sie sicher durch den gesamten Verkaufsprozess. Mit klarer Struktur, professioneller Gesprächsführung und modernen Verkaufsmethoden wandeln wir Interesse in Abschlüsse um.",
        goal: "Planbare Neukundengewinnung mit System. Kein Zufall mehr, sondern reproduzierbarer Erfolg durch einen abgestimmten, effizienten Vertriebsprozess quer durch alle Abteilungen.",
        outcomeLabel: "Die Herausforderung",
        outcome: "Selbst das beste Produkt verkauft sich nicht von allein. Studien zeigen, dass 88 % der Geschäftsführer und Vertriebsleiter den Vertrieb heute wichtiger einschätzen als das Produkt selbst. Wer hier Schwächen hat, verschenkt massiv Umsatz und Wachstum.",
      },
      {
        title: "Prozesse",
        intro: "Der entscheidende Unterschied zwischen „gut“ und „herausragend“ liegt in den Prozessen. Schlanke, durchdachte Abläufe ermöglichen es, manuelle Tätigkeiten zu digitalisieren und zu automatisieren. Dadurch sinken Fehlerquoten, Mitarbeiterkosten werden reduziert und wertvolle Ressourcen werden frei – für das, was wirklich zählt: Wachstum und Innovation.",
        goal: "Reibungslose, agile Unternehmensabläufe – intern wie extern. Schnittstellen optimieren, Effizienz steigern und eine Infrastruktur schaffen, die Agilität und höchste Qualität gleichzeitig möglich macht.",
        outcomeLabel: "Die Folge",
        outcome: "Neue Verkaufskanäle, digitale Marketinginstrumente und moderne Vertriebswege stellen mittelständische Unternehmen vor große Herausforderungen. Nur wer seine internen Prozesse und IT-Infrastruktur konsequent an die Anforderungen der globalisierten Marktwirtschaft anpasst, kann die Chancen der Digitalisierung wirklich nutzen.",
      },
    ],
  },

  contactPage: {
    title: "So findest du uns",
    subtitle: "Haben wir dein Interesse geweckt? Dann melde dich!",
  },

  meta: {
    home: {
      title: "Neukundengewinnung für Energievertriebe",
      description: "Wir gewinnen Neukunden für Energievertriebe – systematisch, planbar und messbar. Unternehmensberatung mit echter Umsetzung im PV-, Wärmepumpen- sowie Strom- und Gas-Vertrieb.",
    },
    about: {
      title: "Wer wir sind – Unternehmensberatung mit echter Umsetzung",
      description: "Wir ticken anders – und das sieht man am Erfolg unserer Kunden. Limit Breakers denkt strategisch und setzt um: geballte Kompetenz im Vertrieb erneuerbarer Energien.",
    },
    competencies: {
      title: "Kompetenzen – Marketing, Vertrieb und Prozesse",
      description: "Marketing, Vertrieb und Prozesse aus einer Hand: Wir gewinnen planbar Neukunden für Energievertriebe – mit messbaren Kampagnen, systematischem Vertrieb und automatisierten Abläufen.",
    },
    contact: {
      title: "Kontakt – dein Weg zu planbarem Vertrieb",
      description: "Melde dich für ein kostenloses Erstgespräch: per WhatsApp, telefonisch unter +359 895 500 755 oder per E-Mail an info@limit-breakers.eu.",
    },
    imprint: { title: "Impressum" },
    privacy: { title: "Datenschutzerklärung" },
    terms: { title: "AGB & Widerruf" },
  },
};
// Bewusst ohne "as const": sonst wuerde der abgeleitete Typ die deutschen
// Texte als Literale festschreiben und en/bg koennten nur exakt dieselben
// Zeichenketten enthalten.

export default de;
