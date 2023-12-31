import path from "path";

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
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "page", mode: "out-in" },
    head: {
      title: "Fantagolia",
      script: [
        {
          src: "https://code.jquery.com/jquery-3.7.1.min.js",
          integrity: "sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=",
          crossorigin: "anonymous",
        },
        {
          src: "https://cdn.jsdelivr.net/npm/jquery.ripples@0.6.3/dist/jquery.ripples-min.min.js",
        },
      ],
    },
  },
  build: {
    transpile: ["gsap"],
  },
});
