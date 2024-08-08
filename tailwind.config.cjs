/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      // Based on MUI breakpoints
      sm: "600px",
      md: "900px",
      lg: "1200px",
      xl: "1536px",
      // "2xl": "1536px",
    },
    extend: {
      aspectRatio: {
        skyscraper: "3 / 4",
      },
      colors: {
        gray: {
          100: "#f2f2f2",
        },
        purple: "#6E5EE1",
        blue: {
          900: "#282EB7",
          500: "#12A594",
          300: "#21D9B8",
        },
      },
      boxShadow: {
        csm: "0 3px 10px 3px rgba(0,0,0,0.05)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
