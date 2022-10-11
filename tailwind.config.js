const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primary: "#56c596",
        secondary: "#205072",
        light: "#cff4d2",
        shadowHard: "#329d9c",
        shadowLight: "#7be495",
        text: "#fff",
        error: "#C73E1D",
      },
    },
  },
  plugins: [],
};
