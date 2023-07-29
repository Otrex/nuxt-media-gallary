import type { Config } from "tailwindcss";

const config: Partial<Config> = {
  content: [
    "components/**/*.{vue,js,ts}",
    "layouts/**/*.vue",
    "assets/css/*.css",
    "pages/**/*.vue",
    "composables/**/*.{js,ts}",
    "plugins/**/*.{js,ts}",
    "App.{js,ts,vue}",
    "app.{js,ts,vue}",
    "Error.{js,ts,vue}",
    "error.{js,ts,vue}",
  ],
  theme: {
    extend: {
      colors: {},
    },
  },
};

export default config;
