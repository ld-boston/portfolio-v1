// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@vueuse/nuxt'],
  typescript: {
    typeCheck: false,
    shim: false,
  },
  // styles
  css: ['@/assets/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/styles/primeflex/_variables.scss";
            @import "@/assets/styles/primeflex/_functions.scss";
            @import "@/assets/styles/primeflex/_mixins.scss";
          `,
        },
      },
    },
  },
})
