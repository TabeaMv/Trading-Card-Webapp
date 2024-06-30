// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: { plugins: ["~/server/index.ts"], },
  runtimeConfig: {mongodbUri: process.env.MONGODB_URI},
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', "nuxt-mongoose", "@nuxt/image"],
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