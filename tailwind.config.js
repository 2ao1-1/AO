/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["soria", "sans-serif"],
        secondary: ["Fira Code", "Open Sans"],
        third: ["Lato"],
      },
      colors: {
        PrimaryDark: "#2B2B2B",
        PrimaryLight: "#707070",
        Secondary: "#4A4A4A",
        Details: "#9B9B9B",
        Main: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
