import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    year: z.union([z.number(), z.string()]),
    location: z.string(),
    category: z.enum(["Konut", "Ticari", "İç Mekan", "Peyzaj", "Kentsel"]),
    status: z.enum(["Konsept", "Tasarım", "Uygulama", "Tamamlandı"]).default("Tamamlandı"),
    client: z.string().optional(),
    area: z.string().optional(),
    cover: z.string(),
    coverAlt: z.string().optional(),
    images: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
          caption: z.string().optional(),
          span: z.enum(["full", "half"]).optional(),
        }),
      )
      .default([]),
    summary: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(100),
  }),
});

export const collections = { projects };
