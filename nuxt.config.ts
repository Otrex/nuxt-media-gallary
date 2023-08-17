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
      appwriteProjectId: process.env.NUXT_APPWRITE_PROJECT_ID,
      appwriteBucketId: process.env.NUXT_APPWRITE_BUCKET_ID,
      appwriteAPIEndpoint: process.env.NUXT_APPWRITE_API_ENDPOINT,
    },
  },
  ...{
    tailwindcss: {
      cssPath: "~/assets/css/tailwind.css",
      configPath: "tailwind.config",
    },
  },
});
