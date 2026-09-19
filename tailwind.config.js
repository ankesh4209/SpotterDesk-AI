/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#5B5FEF",
          hover: "#4A4EDB",
          light: "#EEF0FF",
          dark: "#3B3EC2",
        },
        brand: {
          dark: "#0B0F19",
          card: "#121826",
          border: "#1E293B",
        },
        surface: "#F8FAFC",
      },
    },
  },
  plugins: [],
};