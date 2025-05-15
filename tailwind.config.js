/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B9A9A", // Teal
        secondary: "#F6EFE1", // Soft beige
        accent: "#FF7F49", // Orange
        text: "#1A2E44", // Dark navy
      },
      fontFamily: {
        serif: ["var(--font-lora)", "serif"], // Updated from georgia to lora
        sans: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "circle-pattern": "url('/images/circle-pattern.svg')",
      },
    },
  },
  plugins: [],
};
