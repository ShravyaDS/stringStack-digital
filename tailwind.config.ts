import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ── Original spec palette ── */
        obsidian: {
          DEFAULT: "#090D16",
          50:  "#1A2540",
          100: "#162032",
          200: "#111827",
          300: "#0E1623",
          400: "#0B1020",
          500: "#090D16",
          600: "#070B12",
          700: "#05080E",
          800: "#04060A",
          900: "#020408",
        },
        surface: {
          DEFAULT: "#111827",
          hover:   "#162032",
          elevated:"#1A2540",
          subtle:  "#0E1623",
        },
        /* Spec accent colors */
        brand: {
          blue:   "#3B82F6",
          indigo: "#6366F1",
          cyan:   "#06B6D4",
          emerald:"#10B981",
          amber:  "#F59E0B",
          "blue-light":   "#60A5FA",
          "indigo-light": "#818CF8",
        },
        /* Legacy compat */
        accent: {
          blue:   "#3B82F6",
          indigo: "#6366F1",
          cyan:   "#06B6D4",
          emerald:"#10B981",
          violet: "#6366F1",  /* alias → indigo */
        },
        border: {
          DEFAULT: "rgba(255,255,255,0.09)",
          subtle:  "rgba(255,255,255,0.06)",
          strong:  "rgba(255,255,255,0.15)",
          glow:    "rgba(59, 130, 246, 0.35)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow":  "radial-gradient(700px circle at 50% -5%, rgba(59,130,246,0.18), transparent 65%)",
        "card-glow":  "radial-gradient(400px circle at 50% 0%, rgba(99,102,241,0.12), transparent 70%)",
        "brand-glow": "radial-gradient(circle, rgba(59,130,246,0.20) 0%, transparent 70%)",
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-6px)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition:  "200% 0" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%":      { opacity: "1",   transform: "scale(1.05)" },
        },
      },
      animation: {
        "fade-in-up":  "fadeInUp 0.6s ease-out forwards",
        "float-slow":  "float 6s ease-in-out infinite",
        shimmer:       "shimmer 2.5s infinite linear",
        "pulse-glow":  "pulseGlow 3s ease-in-out infinite",
      },
      boxShadow: {
        card:    "0 1px 3px rgba(0,0,0,0.6), 0 8px 24px rgba(0,0,0,0.45)",
        floating:"0 4px 8px rgba(0,0,0,0.4), 0 24px 64px rgba(0,0,0,0.6)",
        blue:    "0 8px 32px rgba(59,130,246,0.28)",
        indigo:  "0 8px 32px rgba(99,102,241,0.24)",
        emerald: "0 8px 32px rgba(16,185,129,0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
