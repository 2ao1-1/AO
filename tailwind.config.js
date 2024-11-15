/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        logoFont: ["AwesomeLathusca-Regular", "Merriweather"],
        headFont: ["Apex-Regular", "sans-serif"],
        secondFont: ["Roboto", "Open Sans"],
      },
      colors: {
        Main: "#F5F5F5",
        whiteopacity: "#f5f5f580",
        btnColor: "#D4AF37",
        darkgray: "#333",
        darkblue: "#1E3A8A",
        darkblur: "#00000080",
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
