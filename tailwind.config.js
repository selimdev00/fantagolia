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
        purple: "#1C0030",
        gray: {
          text: "#BAB2C0",
        },
        violet: {
          2: "#330B59",
          3: '#482A5D'
        },
      },
    },
  },
  plugins: [],
};
