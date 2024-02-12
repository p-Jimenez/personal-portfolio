const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-syne)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#C5ACDA",
        secondary: "#FFFCE1"
      }
    },
  },
};
