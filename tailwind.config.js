/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      dopis: ["Dopis", "sans-serif"],
    },

    extend: {
      colors: {
        pink: "#FF006F",
      },
    },
  },
  plugins: [],
};
