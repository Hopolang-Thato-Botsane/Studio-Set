import { defineField, defineType } from 'sanity';

export const serviceType = defineType({
  name: 'service',
  title: 'Services Configuration',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description Text',
      type: 'text',
      rows: 3, // Gives you a nice, clean text box size in the dashboard
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order Weight',
      type: 'number',
      description: 'Lower numbers show up first (e.g., 1, 2, 3)',
    }),
    defineField({
      name: 'serviceImage',
      title: 'Service Graphic / Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'tags',
      title: 'Data Tags / Category Pills',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Add short tags for this service (e.g., "Camera Kits", "Lighting", "Support")',
    }),
  ],
});