import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const horoscopes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/horoscopes" }),
  schema: z.object({
    name: z.string(),
    symbol: z.string(),
    element: z.enum(["Foc", "Terra", "Aire", "Aigua"]),
    dates: z.string(),
    date: z.coerce.date(),
    order: z.number().int().min(1).max(12),
    color: z.string(),
    number: z.union([z.string(), z.number()]),
    moment: z.string(),
    description: z.string()
  })
});

const compatibilities = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/compatibilities" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    signe1: z.string(),
    signe2: z.string(),
    category: z.literal("compatibilitat"),
    date: z.coerce.date(),
    score: z.number().int().min(0).max(100),
    faqs: z.array(z.object({ question: z.string(), answer: z.string() })).min(4).max(6)
  })
});

export const collections = { horoscopes, compatibilities };
