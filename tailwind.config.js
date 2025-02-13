/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        dm: ["DM Sans", "sans-serif"],
        exo: ["Exo 2", "sans-serif"],
        kanit: ["Kanit", "sans-serif"],
        lexend: ["Lexend", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
        sora: ["Sora", "sans-serif"],
        space: ["Space Grotesk", "sans-serif"],
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      colors: {
        // 🌙 Dark Theme Background
        background: "#18181B", // Zinc-900
        foreground: "#D1D5DB", // Gray-300 (readable text)

        // 🎨 Primary Colors (Red for interactive elements)
        primary: {
          DEFAULT: "#B91C1C", // Red-700
          foreground: "#FEE2E2", // Soft Red
        },

        // 🔥 Secondary Colors (Muted Red for highlights)
        secondary: {
          DEFAULT: "#991B1B", // Red-800
          foreground: "#FCA5A5", // Soft Red
        },

        // 🎯 Accent Colors (Dark Red for contrast)
        accent: {
          DEFAULT: "#7F1D1D", // Red-900
          foreground: "#E2E8F0", // Gray-200
        },

        // ⚠️ Destructive (For Warnings & Alerts)
        destructive: {
          DEFAULT: "#DC2626", // Red-600
          foreground: "#FEE2E2", // Soft Red Highlight
        },

        // 🛑 Borders, Inputs, and UI Elements
        border: "#B91C1C", // Red-700 for dividers
        input: "#27272A", // Zinc-800 for form fields
        ring: "#7F1D1D", // Red-900 glow effect

        // 📊 Chart Colors (For Future Data Visuals)
        chart: {
          1: "#991B1B", // Red-800
          2: "#7F1D1D", // Red-900
          3: "#B91C1C", // Red-700
          4: "#DC2626", // Red-600
          5: "#1E293B", // Slate-800 (for neutral contrast)
        },
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },

  plugins: [
    require("tailwindcss-animate"),
    "@tailwindcss/typography",
    require("tailwind-scrollbar-hide"),
  ],
};
