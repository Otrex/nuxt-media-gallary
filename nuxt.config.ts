// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/css/main.css"],
  modules: ["@nuxtjs/tailwindcss"],
  imports: {
    autoImport: true,
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
    },
  },
  ...{
    tailwindcss: {
      cssPath: "~/assets/css/tailwind.css",
      configPath: "tailwind.config",
    },
  },
});
