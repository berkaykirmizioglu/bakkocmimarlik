import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://bakkocmimarlik.com",
  trailingSlash: "ignore",
  build: {
    format: "directory",
  },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes("/404"),
    }),
  ],
  image: {
    responsiveStyles: true,
  },
});
