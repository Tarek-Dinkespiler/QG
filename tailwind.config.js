/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,ts,tsx,html,css}"],
  theme: {
    extend: {
      colors: {
        dark: "#343330",
        primary: "#DDE392",
        secondary: "#C36F09",
        incorrect: "#BFBE8F",
        failure: "#ef4444",
        success: "#11EE22",
      },
    },
  },
  plugins: [],
};
