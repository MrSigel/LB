import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
      keyframes: {
        "gradient-float": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(20px, -30px) scale(1.08)" },
        },
        "gradient-float-slow": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-30px, 20px) scale(1.12)" },
        },
        "text-shimmer": {
          "0%": { backgroundPosition: "0% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "pulse-ring": {
          "0%": { boxShadow: "0 0 0 0 rgba(160,28,37,0.45)" },
          "70%": { boxShadow: "0 0 0 12px rgba(160,28,37,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(160,28,37,0)" },
        },
        "scroll-hint": {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.4" },
          "50%": { transform: "translateY(6px)", opacity: "1" },
        },
      },
      animation: {
        "gradient-float": "gradient-float 14s ease-in-out infinite",
        "gradient-float-slow": "gradient-float-slow 18s ease-in-out infinite",
        "text-shimmer": "text-shimmer 4s linear infinite",
        float: "float 4s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2.4s ease-out infinite",
        "scroll-hint": "scroll-hint 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
