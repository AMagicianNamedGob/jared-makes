/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "synth-black": "#181424",
        "synth-purple": "#3C1053",
        "synth-blue": "#3ca7bb",
        "synth-pink": "#E10098",
        "synth-yellow": "#F4AF23",
        "synth-purple-2": "#D7A9E3",
        "synth-pink-2": "#550737",
        "synth-green": "#00FFB2",
        "synth-orange": "#FF8C00",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),

  ],
};
