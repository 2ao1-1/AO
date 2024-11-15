/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        logoFont: ["AwesomeLathusca-Regular", "Merriweather"],
        secondFont: ["Roboto", "Open Sans"],
        // headFont: ["Apex-Regular", "sans-serif"],
      },
      colors: {
        Main: "#F5F5F5",
        darkgray: "#333",
        // btnColor: "#D4AF37",
        // whiteopacity: "#f5f5f580",
        // darkblue: "#1E3A8A",
        // darkblur: "#00000080",
      },
      fontSize: {
        long: "9.28rem",
        tab: "7.28rem",
        med: "5.3rem",
        phone: "2.2rem",
      },
      letterSpacing: {
        headSpace: "-3.5px",
      },
      inset: {
        minus: "-3rem",
        topImg: "-4rem",
      },
      dropShadow: {
        drip: "2px 2px 0px black",
      },
    },
  },
  plugins: [],
};
