// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  modules: ['@atlasconsulting/nuxt-bedita', '@nuxtjs/tailwindcss'],
});