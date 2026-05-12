import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

// GEÇİCİ: GoDaddy domain'i alınana kadar GitHub Pages subpath'inde yayınlıyoruz.
// Domain alındığında: site → "https://bakkocmimarlik.com", base satırını kaldır,
// ve public/CNAME dosyasını geri ekle (içeriği: bakkocmimarlik.com).
export default defineConfig({
  site: "https://berkaykirmizioglu.github.io",
  base: "/bakkocmimarlik",
  trailingSlash: "ignore",
  build: {
    format: "directory",
  },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.endsWith("/404") && !page.endsWith("/404/"),
    }),
  ],
  image: {
    responsiveStyles: true,
  },
});
