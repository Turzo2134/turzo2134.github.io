import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
  }),
});

const experience = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    company: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    description: z.string(),
  }),
});

const education = defineCollection({
  type: 'data',
  schema: z.object({
    school: z.string(),
    degree: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    grade: z.string(),
  }),
});

const skills = defineCollection({
  type: 'data',
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