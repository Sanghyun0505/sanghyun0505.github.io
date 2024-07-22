import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:4321/",
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
});
