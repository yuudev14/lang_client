/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "button-not-clicked": "0 9px #999",
        "button-clicked": "0 5px #666",
      },
    },
  },
  plugins: [],
};
