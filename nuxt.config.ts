// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/scss/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@morev/vue-transitions/nuxt", "nuxt-icon"],
  nitro: {},
  app: {
    baseURL: "/fantagolia",
  },
});
