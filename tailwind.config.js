/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,tsx,html,css}"],
  theme: {
    extend: {
      colors: {
        dark: "#343330",
        primary: "#DDE392",
        secondary: "#C36F09",
        incorrect: "#AFBE8F",
        failure: "#E07A5F",
        success: "#A0CA92",
      },
    },
  },
  plugins: [],
};
