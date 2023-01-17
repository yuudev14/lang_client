/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // screens: {
      //   layout_xs: "500px",
      // },
      boxShadow: {
        "button-not-clicked": "0 7px rgb(220,20,60)",
        "button-clicked": "0 3px rgb(139,0,0)",
      },
      colors: {
        primary: "#ff4d4c",
        secondary: "#1bb0f8",
        tertiary: "#ffc805",
      },
      fontFamily: {
        title: '"Comic Sans MS", "Comic Sans", cursive',
      },
    },
  },
  plugins: [],
};
