/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,tsx,html,css}"],
  theme: {
    extend: {
      colors: {
        primary: "#DDE392",
        secondary: "#AFBE8F",
        dark: "#343330",
        highlight: "#E07A5F",
        cta: "#C36F09",
      },
    },
  },
  plugins: [],
};
