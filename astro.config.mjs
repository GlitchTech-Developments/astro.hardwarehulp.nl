import { defineConfig } from "astro/config"
import preact from "@astrojs/preact"
import vercel from "@astrojs/vercel/static"

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [preact({ compat: true })],
  adapter: vercel({
    imagesConfig: {
      sizes: [320, 640, 1280],
      imageService: true,
    },
  }),
  compressHTML: true,
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
})
