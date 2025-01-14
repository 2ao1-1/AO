module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["ALT_ROGUE", "sans-serif"],
        secondary: ["Architectural", "Open Sans"],
        third: ["antiquestories"],
      },
      colors: {
        Main: "#F5F5F5",
      },
      letterSpacing: {
        xs: ".5px",
        sm: "1px",
        md: "2px",
        lg: "3px",
      },
    },
  },
  plugins: [],
};
