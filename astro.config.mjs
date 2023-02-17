import { defineConfig } from "astro/config";
import image from "@astrojs/image";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    mdx(),
    prefetch(),
    sitemap(),
    react(),
    tailwind(),
  ],
});
