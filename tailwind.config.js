module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["soria", "sans-serif"],
        secondary: ["Fira Code", "sans-serif"],
        // secondary: ["Lato", "Open Sans"],
        // third: ["antiquestories"],
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
      keyframes: {
        "infinite-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "infinite-scroll":
          "infinite-scroll var(--scroll-duration) linear infinite",
      },
    },
  },
  plugins: [],
};
