import type { Dictionary } from "./index";

/**
 * Englisch – Auffangsprache fuer alles ausser Deutsch und Bulgarisch.
 *
 * Der deutsche Text duzt. Englisch kennt die Unterscheidung nicht, der
 * Ton bleibt daher bewusst direkt und unverstellt statt woertlich.
 */
const en: Dictionary = {
  nav: {
    home: "Home",
    about: "About us",
    competencies: "What we do",
    contact: "Contact",
    cta: "Free consultation",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    mobileNav: "Main navigation, mobile",
    mainNav: "Main navigation",
    home_aria: "Limit Breakers – home",
    language: "Language",
    languageChange: "Choose language",
  },

  hero: {
    words: ["Predictable", "customer", "acquisition for"],
    highlight: "energy sales teams",
    body: "We do things differently – and you can see it in our clients' results. We sell solar, heat pumps and energy ourselves. Whatever we advise, we do every day.",
    ctaPrimary: "Book a free consultation",
    ctaSecondary: "More about us",
    imageAlt: "Two colleagues working together in an office",
  },

  trustBar: {
    aria: "Areas we work in",
    claim: "Active in solar, heat pump, electricity and gas sales",
    fields: {
      solar: "Solar",
      heatPump: "Heat pumps",
      energy: "Electricity & gas",
    },
  },

  about: {
    title: "Management consulting that actually delivers",
    imageAlt: "Two colleagues in conversation at a standing desk",
    p1: "We are a management consultancy that gets its hands dirty. We help you win customers predictably – no luck, no guesswork. We are active in solar, heat pumps, electricity and gas ourselves. So we know from experience what works and what doesn't.",
    p2: "We bring structure to your sales and automate everything that repeats. Online and offline work together – from the first lead to the closed deal. Your team stays focused, and you can see what it's worth at any time.",
    quote: "Structure, efficiency and measurable growth – from real practice, not from a textbook.",
  },

  approach: {
    title: "What sets us apart from traditional consultancies",
    subtitle: "We don't deliver concepts for the drawer. We step in where revenue is made.",
    pillars: {
      expertise: {
        title: "Expertise",
        text: "We know energy sales from the inside: clear structures, clean processes, online and offline. And we only advise on what we do ourselves every day.",
      },
      execution: {
        title: "Execution",
        text: "For us, execution means rolling up our sleeves. We go where it has an effect – from the first lead to the closed deal – and automate everything that repeats. Every measure feeds your revenue.",
      },
      experience: {
        title: "Experience",
        text: "We have worked in energy sales ourselves for years. Solar leads, heat pumps, electricity and gas contracts – we know both sides of the business and bring that practice straight to you.",
      },
    },
  },

  competencies: {
    bannerTitle: "Systematic customer acquisition for energy sales teams",
    bannerAlt: "Two people talking in a meeting area",
    items: {
      leads: {
        title: "Energy lead business",
        text: "We are out there in solar, heat pump and energy sales ourselves. That's why we know which leads actually close – and which ones only make the statistics look good.",
      },
      digital: {
        title: "Digitalisation",
        text: "We bring pace and structure to your sales. Online and offline work together, and you can see in black and white what's working, at any time.",
      },
      automation: {
        title: "Automation",
        text: "Everything that repeats is handled by technology – from the first lead to the closed deal. Your sales get faster and leaner, and your team has room to focus on customers.",
      },
    },
    services: [
      "Systematic customer acquisition",
      "Solar lead business",
      "Heat pump lead business",
      "Electricity & gas sales",
      "Sales process optimisation",
      "Lead-to-close value chain",
    ],
  },

  breakBanner: {
    title: "Judge us by our results",
    principles: [
      "We are there at every step.",
      "We leave no potential on the table.",
      "In the end, your revenue is what counts.",
    ],
    cta: "Book your consultation now",
  },

  testimonials: {
    title: "What our clients say",
    roleFemale: "Client",
    roleMale: "Client",
    rating: "Rating: {n} out of 5 stars",
    select: "Select a testimonial",
    voice: "Testimonial {n}",
    prev: "Previous testimonial",
    next: "Next testimonial",
    quotes: [
      "Working with Limitbreakers showed me what professionalism paired with reliability really means. I feel very welcome and well advised. Everything I asked for was delivered.",
      "I can only recommend the Limitbreakers team. Mr Klaus accommodated every one of our requests, and problems were solved quickly. Communication was a real pleasure.",
      "My requests and problems were solved immediately – great service! Fast delivery and a fantastic team!",
    ],
  },

  team: {
    title: "The people behind Limit Breakers",
    subtitle: "There are no off-the-shelf consultants here – just people who do sales themselves. And those are the people you'll be talking to.",
    roles: {
      accounting: "Accounting",
      backoffice: "Back office",
      sales: "Sales",
    },
  },

  skills: {
    title: "What we stand for",
    subtitle: "Quality and execution. We keep developing – and we measure ourselves by what actually comes out at the end.",
    labels: {
      marketing: "Marketing",
      sales: "Sales",
      software: "Software",
    },
  },

  contact: {
    title: "Let's talk about your sales",
    subtitle: "In a free first conversation we look at your sales and show you exactly where there's room to grow.",
    whatsapp: "WhatsApp: message us now",
    form: {
      firstName: "First name",
      lastName: "Last name",
      email: "Email",
      message: "Message",
      messagePlaceholder: "What's on your mind? Tell us briefly about your sales.",
      privacyBefore: "I have read the",
      privacyLink: "privacy policy",
      privacyAfter: "and consent to my data being processed.",
      honeypot: "Website (please leave blank)",
      submit: "Send message",
      sending: "Sending …",
      success: "Thank you! Your message has arrived – we'll get back to you within 24 hours.",
      errorGeneric: "Something went wrong. Please try again.",
      errorOffline: "No connection to the server. Are you online?",
      errorFields: "Please fill in all fields.",
      errorTooLong: "One of the entries is too long.",
      errorEmail: "That email address doesn't look valid.",
      errorPrivacy: "Please accept the privacy policy.",
      errorNotConfigured: "Email sending is not set up at the moment. Please write to us directly at info@limit-breakers.eu.",
      errorSend: "The message could not be sent. Please try again later.",
    },
  },

  footer: {
    description: "Management consulting that actually delivers. We win customers for energy sales teams – systematically, predictably and at scale.",
    contact: "Contact",
    legal: "Legal",
    imprint: "Imprint",
    privacy: "Privacy policy",
    terms: "Terms & withdrawal",
    rights: "All rights reserved.",
    backToTop: "Back to top",
    backToTopAria: "Scroll back to top",
  },

  whatsapp: {
    label: "Message us",
    aria: "Get in touch via WhatsApp",
    message: "Hello, I have been looking around your website and would like to get in touch with you.",
  },

  legal: {
    backHome: "← Back to the homepage",
    germanOnly: "Please note: for legal reasons, this text is only available in German.",
  },

  aboutPage: {
    title: "Who we are – management consulting that actually delivers",
    subtitle: "We do things differently – and you can see it in our clients' results. We think strategically, but we don't get stuck in analyses and concepts. We execute.",
    intro1: "We move people – online and offline – right across Europe. Together we implement effective solutions along the entire value chain. Your people work with more motivation and get more done, while you can measure your results clearly at any time.",
    intro2: "Experience concentrated expertise in renewable energy sales – from solar and heat pump leads through to electricity and gas contracts.",
    pillars: [
      {
        title: "Expertise",
        text: "We are genuine experts in energy sales and known for highly efficient structures and processes. At Limitbreakers we deliberately stick to what we master and deliver ourselves every day. With deep knowledge in digitalisation, automation and customer acquisition, we build clear, lean sales structures – online and offline. We only advise on what we can do ourselves. That is what makes the difference.",
      },
      {
        title: "Execution",
        text: "At Limitbreakers we step in exactly where the leverage is greatest. We get into your existing structures, adjust the right levers and turn strategies into reality without compromise. From lead generation through sales to the closed deal, we optimise the entire value chain. We are only satisfied once our work pays off month after month in noticeable revenue and measurable results for you.",
      },
      {
        title: "Experience",
        text: "We bring years of deep, hands-on experience from energy sales with us. Limitbreakers combines innovative methods with genuine industry knowledge – from solar and heat pump leads to electricity and gas contracts. We have proven several times over that we move companies noticeably forward. With that knowledge we break through targets together and achieve lasting revenue growth.",
      },
    ],
    valuesTitle: "Philosophy & values",
    values: [
      {
        title: "Philosophy and values",
        text: "We are the management consultancy that doesn't just plan but acts. With innovative methods, partnership thinking and absolute consistency, we create lasting value for mid-sized companies and international groups. We change structures, optimise processes and move people towards success. Measurable value for our clients is always at the centre of what we do.",
      },
      {
        title: "Judge us by our results",
        text: "Limitbreakers is not satisfied with pretty concepts on paper. We support you in developing the strategy and through every single step of putting it into practice. We build enthusiasm for change at every level, unlock the full potential of your people and make sure you benefit from real, measurable results and clear revenue growth. Our work has to pay off – full stop.",
      },
      {
        title: "Our guiding principles",
        text: "For us it goes without saying that we deliver measurable value to our clients, live sustainability actively and take full responsibility for what we do. These values are the basis of our work. They are what makes every collaboration long-term, trusting and extremely successful.",
      },
      {
        title: "Our clients",
        text: "Our clients are companies in the renewable energy sector that sell products and services to private and commercial customers. There is always one goal at the centre of our work: the greatest possible benefit for you. That is the only way a long-standing, trusting and extremely successful partnership comes about.",
      },
      {
        title: "Our people",
        text: "Strong, highly motivated people with character are the basis of your success. Working with Limitbreakers is defined by integrity, mutual respect, growth and absolute reliability. We reward that attitude with secure jobs and fair, performance-based pay – because only strong people deliver strong results.",
      },
      {
        title: "Competition",
        text: "Limitbreakers claims a leading position in the market in terms of quality. The high qualifications, broad training and intensive practical experience of our people guarantee exceptional delivery capability. We secure that claim through constant innovation and consistent development – so you always get the best work.",
      },
    ],
  },

  competenciesPage: {
    title: "What we do",
    subtitle: "We do things differently – and it shows in our clients' results. We think strategically, but we don't stop at analyses and concepts. We implement effective solutions along the entire value chain.",
    intro: "We implement together with you – from the first lead to the closed deal. Your team works with more motivation and gets more done, and you can measure the results. Experience concentrated expertise when it comes to renewable energy sales.",
    goalLabel: "Our goal",
    areas: [
      {
        title: "Marketing",
        intro: "The best product is worth nothing if nobody hears about it. Digitalisation has fundamentally changed how customers buy. Anyone who wants to succeed today has to do more than know what the market expects – they have to speak to it directly and emotionally.",
        goal: "To carry your products and services outward briefly, clearly and convincingly. With measurable campaigns that reach exactly the right prospects – reliably, month after month.",
        outcomeLabel: "The consequence",
        outcome: "Marketing stopped being a nice-to-have long ago; it is the decisive success factor for mid-sized companies. Many struggle with the right positioning and lose valuable potential because their message doesn't land.",
      },
      {
        title: "Sales",
        intro: "Marketing brings prospects – sales turns them into paying customers. On a strong marketing foundation we qualify leads systematically and guide them safely through the whole sales process. With clear structure, professional conversation and modern selling methods, we turn interest into closed deals.",
        goal: "Predictable customer acquisition with a system. No more chance – reproducible success through a coordinated, efficient sales process across every department.",
        outcomeLabel: "The challenge",
        outcome: "Even the best product doesn't sell itself. Studies show that 88% of managing directors and sales leaders now rate sales as more important than the product itself. Any weakness here gives away serious revenue and growth.",
      },
      {
        title: "Processes",
        intro: "The decisive difference between „good“ and „outstanding“ lies in the processes. Lean, well-thought-out workflows make it possible to digitalise and automate manual work. Error rates drop, staff costs come down and valuable resources are freed up – for what really counts: growth and innovation.",
        goal: "Smooth, agile operations – internally and externally. Optimise interfaces, increase efficiency and build an infrastructure that allows agility and the highest quality at the same time.",
        outcomeLabel: "The consequence",
        outcome: "New sales channels, digital marketing tools and modern routes to market present mid-sized companies with major challenges. Only those who consistently adapt their internal processes and IT infrastructure to a globalised market can really seize the opportunities of digitalisation.",
      },
    ],
  },

  contactPage: {
    title: "How to reach us",
    subtitle: "Have we caught your interest? Then get in touch!",
  },

  meta: {
    home: {
      title: "Customer acquisition for energy sales teams",
      description: "We win customers for energy sales teams – systematically, predictably and measurably. Consulting that actually delivers in solar, heat pump, electricity and gas sales.",
    },
    about: {
      title: "Who we are – management consulting that actually delivers",
      description: "We do things differently – and you can see it in our clients' results. Limit Breakers thinks strategically and executes: concentrated expertise in renewable energy sales.",
    },
    competencies: {
      title: "What we do – marketing, sales and processes",
      description: "Marketing, sales and processes from a single source: we win customers for energy sales teams predictably – with measurable campaigns, systematic selling and automated workflows.",
    },
    contact: {
      title: "Contact – your route to predictable sales",
      description: "Get in touch for a free first conversation: via WhatsApp, by phone on +359 895 500 755 or by email to info@limit-breakers.eu.",
    },
    imprint: { title: "Imprint" },
    privacy: { title: "Privacy policy" },
    terms: { title: "Terms & withdrawal" },
  },
};

export default en;
