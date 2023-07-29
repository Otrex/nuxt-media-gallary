Run

```
npx nuxi@latest init nuxt-gallery-share
```

then

```
yarn
```

then

```
yarn add @nuxtjs/tailwindcss swiper
```

After that, create a tailwind.config.ts and add the content in [here](./tailwind.config.ts)

Next, update the nuxt.config.ts with:

```ts
// nuxt config object
...
css: ["@/assets/css/main.css"],
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
    },
  },
  ...({tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config",
  }})
```

Then, create the `assets/css/main.css` and `assets/css/tailwind.css` files.

In the `assets/css/tailwind.css` add the following:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

In the `assets/css/main.css` add the contents [here](./assets/css/main.css)

Then after that, create the `pages` folder and add the `index.vue` file to that folder, then add the contents of [this](./pages/index.vue)
