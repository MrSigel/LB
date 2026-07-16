import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Zusätzliche Stufe oberhalb von 2xl (1536px) für sehr breite Monitore.
      screens: {
        "3xl": "1920px",
      },
      colors: {
        // Dunkles Basis-Theme (neutrales Anthrazit/Near-Black – passend zum Logo)
        base: {
          900: "#0d0d10",
          800: "#141418",
          700: "#1e1e24",
          600: "#2c2c34",
        },
        // Akzentfarbe: Marken-Rot aus dem Logo (#a01c25)
        accent: {
          DEFAULT: "#a01c25",
          light: "#c62c38",
          dark: "#7c1219",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(circle at 50% 0%, rgba(160,28,37,0.18), transparent 60%)",
      },
      // Die frueheren Endlos-Animationen (gradient-float, text-shimmer,
      // float, pulse-ring, scroll-hint) sind entfernt. Sie liefen dauerhaft
      // mit "infinite" und zwangen die GPU – teils auf 120px-Blur-Flaechen –
      // zu staendigem Neuzeichnen. Die Einblend-Animationen der Seite stehen
      // als Keyframes in globals.css und laufen einmalig.
    },
  },
  plugins: [],
};

export default config;
