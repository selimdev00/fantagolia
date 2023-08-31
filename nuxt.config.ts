export default defineNuxtConfig({
  css: ["@/assets/scss/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@morev/vue-transitions/nuxt", "nuxt-icon"],
  app: {
    baseURL: "/fantagolia",
  },
});
