import { defineConfig } from "astro/config"
import preact from "@astrojs/preact"
import vercel from "@astrojs/vercel/static"

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [preact()],
  adapter: vercel({
    imagesConfig: {
      sizes: [180, 320, 640, 1280],
      domains: [],
      imageService: true,
      minimumCacheTTL: 2592000,
    },
    minimumCacheTTL: 2592000,
  }),
  compressHTML: true,
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
})
