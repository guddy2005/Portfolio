/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      // NEW "NOIR & AMBER" COLOR PALETTE
      colors: {
        primary: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6", // Main Teal
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
          950: "#042f2e",
        },
        // Our new dark/neutral color for text and backgrounds
        neutral: {
          50: "#f8fafc", // Light mode background
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155", // Light mode text
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617", // Dark mode background
        },
      },
      // NEW FONT FAMILY
      fontFamily: {
        display: ["var(--font-calistoga)", ...fontFamily.serif],
        heading: ["var(--font-manrope)", ...fontFamily.sans],
        body: ["var(--font-inter)", ...fontFamily.sans],
      },

      // Rest of your config remains the same
      animation: {
        gradient: "gradient 8s linear infinite",
        "bounce-slow": "bounce 3s linear infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      spacing: { 128: "32rem", 144: "36rem" },
      borderRadius: { "4xl": "2rem" },
      typography: {
        /* Your typography config... */
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
