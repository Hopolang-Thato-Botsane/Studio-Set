import { defineField, defineType } from 'sanity';

export const projectType = defineType({
  name: 'project',
  title: 'Project Showcase',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'projectImage',
      title: 'Project Cover Mockup',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
      defineField({
      name: 'productionType',
      title: 'Type of the production',
      type: 'string',
    }),
      defineField({
      name: 'productionYear',
      title: 'Year of Production',
      type: 'number',
    }),
    defineField({
      name: 'projectUrl',
      title: 'Case Study / Live Site URL',
      type: 'url',
    }),
    defineField({
      name: 'sortOrder',
      title: 'Display Order Position',
      type: 'number',
      description: 'Use numbers to arrange layout position (1, 2, 3, 4, 5, 6, 7, 8)',
    }),
  ],
});