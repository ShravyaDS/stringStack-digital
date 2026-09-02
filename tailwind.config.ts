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
        obsidian: {
          DEFAULT: "#090D16",
          50: "#1A2234",
          100: "#151C2C",
          200: "#111723",
          300: "#0D121C",
          400: "#0A0E18",
          500: "#090D16",
          600: "#070A11",
          700: "#05070C",
          800: "#030407",
          900: "#010203",
        },
        surface: {
          DEFAULT: "#111827",
          hover: "#182238",
          subtle: "#0D1322",
        },
        border: {
          DEFAULT: "#1F2937",
          glow: "rgba(59, 130, 246, 0.3)",
          subtle: "#162032",
        },
        accent: {
          blue: "#3B82F6",
          indigo: "#6366F1",
          cyan: "#06B6D4",
          emerald: "#10B981",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(600px circle at 50% 10%, rgba(59, 130, 246, 0.15), transparent 70%)",
        "card-glow": "radial-gradient(400px circle at 50% 0%, rgba(99, 102, 241, 0.12), transparent 70%)",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        "float-slow": "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s infinite linear",
      },
    },
  },
  plugins: [],
};

export default config;
