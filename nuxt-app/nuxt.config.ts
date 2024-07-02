// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', "@nuxt/image"],
  app: {
    head: {
      title: "ECF Legends",
      meta: [
        { name: "description", content: "Trading Card Game based on Players from 1.EC Frankfurt"}
      ],
    },
  },
  debug: true,
})