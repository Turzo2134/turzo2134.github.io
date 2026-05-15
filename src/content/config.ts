import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
  }),
});

const experience = defineCollection({
  schema: z.object({
    title: z.string(),
    company: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    description: z.string(),
  }),
});

const education = defineCollection({
  schema: z.object({
    school: z.string(),
    degree: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    grade: z.string(),
  }),
});

const skills = defineCollection({
  schema: z.object({
    category: z.string(),
    items: z.array(z.string()),
  }),
});

export const collections = {
  projects,
  experience,
  education,
  skills,
};