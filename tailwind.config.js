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
          'text-2': "#828282",
          'text-3': "#4F4F4F"
        },
        violet: {
          2: "#330B59",
          3: '#482A5D'
        },
        skype: '#0078D7',
        telegram: '#2AABEE',
        whatsapp: '#25D366'
      },
    },
  },
  plugins: []
};
