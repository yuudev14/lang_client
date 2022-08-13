/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "button-not-clicked": "0 7px rgb(8 145 178)",
        "button-clicked": "0 3px rgb(21 94 117)",
      },
    },
  },
  plugins: [],
};
