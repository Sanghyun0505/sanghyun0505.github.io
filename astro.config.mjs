import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:4321/",
  image: {
    remotePatterns: [{ protocol: "https" }],
  },
  markdown: {
    drafts: true,
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
  },
  integrations: [
    mdx({
      syntaxHighlight: "shiki",
      drafts: true,
      shikiConfig: {
        theme: "one-dark-pro",
        wrap: true,
      },
    }),
    sitemap(),
    tailwind(),
    robotsTxt({
      policy: [
        {
          userAgent: "*",
          allow: "/",
        },
      ],
    }),
  ],
});
