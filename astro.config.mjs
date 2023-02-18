import { defineConfig } from "astro/config";
import image from "@astrojs/image";

import mdx from "@astrojs/mdx";

import prefetch from "@astrojs/prefetch";

import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://www.jaredmakes.com",
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
