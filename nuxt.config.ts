// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    viewTransition: true,
  },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxt/image-edge"],
  typescript: {
    strict: true,
  },

  app: {
    head: {
      charset: "UTF-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Multi-Media - John Dibashi",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Built as an assignment for ICS 424 Multi-Media",
        },
      ],
    },
  },
  tailwindcss: {
    config: {
      content: [],
    },
  },
  devtools: { enabled: true },
  ssr: false,
});
