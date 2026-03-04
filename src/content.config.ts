import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";

const experience = defineCollection({
  loader: file("src/_data/experience.yml"),
  schema: z.object({
    organization: z.string(),
    title: z.string(),
    date: z.string(),
    location: z.string(),
    description: z.array(z.string()),
    skills: z.array(z.string()),
  }),
});

const projects = defineCollection({
  loader: file("src/_data/projects.yml"),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    resume_description: z.string().optional(),
    url: z.string().optional(),
    image: z.string().optional(),
  }),
});

const art = defineCollection({
  loader: file("src/_data/art.yml"),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z.string(),
    embedUrl: z.string(),
    aspectRatio: z.string(),
    scale: z.number().optional(),
  }),
});

export const collections = { experience, projects, art };
