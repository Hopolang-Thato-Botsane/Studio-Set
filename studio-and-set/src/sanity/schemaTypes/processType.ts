import { defineField, defineType } from 'sanity';

export const processType = defineType({
  name: 'processStep',
  title: 'Process Timeline Steps',
  type: 'document',
  fields: [
    defineField({
      name: 'stepNumber',
      title: 'Act / Step Number',
      type: 'number',
      description: 'Enter the pure number (e.g., 1 for "ACT 1")',
      validation: (Rule) => Rule.required().integer().min(1),
    }),
    defineField({
      name: 'tagline',
      title: 'Step Tagline',
      type: 'string',
      description: 'e.g., VETTING & CLEARANCE',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'headline',
      title: 'Hover Headline',
      type: 'string',
      description: 'e.g., Submit Manifest',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Hover Detailed Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
  ],
  orderings: [
    {
      title: 'Chronological Order',
      name: 'stepNumberAsc',
      by: [{ field: 'stepNumber', direction: 'asc' }],
    },
  ],
});