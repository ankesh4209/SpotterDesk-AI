/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5B5FEF",
        background: "#FDF8F8",
        text: "#1C1B1B",
        muted: "#767586",
        border: "#E6E1E1",
      },
    },
  },
  plugins: [],
};