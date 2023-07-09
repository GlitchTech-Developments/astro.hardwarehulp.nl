import { defineConfig } from "astro/config"

import react from "@astrojs/react"
import vercel from "@astrojs/vercel/serverless"

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  integrations: [react()],
  adapter: vercel(),
  compressHTML: true,
  image: {
    service: { entrypoint: "astro/assets/services/sharp" },
  },
})
