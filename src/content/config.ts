import { defineCollection, z } from "astro:content";

/**
 * Schema para proyectos profesionales (Works)
 * Estos son trabajos para clientes reales con testimoniales
 */
const worksCollection = defineCollection({
  type: "content",
  schema: z.object({
    // Campos obligatorios
    title: z.string(),
    description: z.string(),
    images: z.array(z.string()), // Array de URLs de imágenes para el carrusel
    technologies: z.array(z.string()),

    // Campos opcionales
    liveUrl: z.string().optional(),
    githubUrl: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(999),

    // Testimonial integrado (opcional)
    testimonial: z
      .object({
        quote: z.string(),
        author: z.string(),
        avatar: z.string().optional(),
      })
      .optional(),
  }),
});

/**
 * Schema para proyectos personales (Projects)
 * Proyectos side projects o de aprendizaje
 */
const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(), // Una sola imagen principal
    technologies: z.array(z.string()),
    githubUrl: z.string().optional(),
    liveUrl: z.string().optional(),
    order: z.number().default(999),
  }),
});

export const collections = {
  works: worksCollection,
  projects: projectsCollection,
};
