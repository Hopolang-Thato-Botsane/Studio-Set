import { defineField, defineType } from 'sanity';

export const kitType = defineType({
  name: 'kitProduct',
  title: 'Production Kits (Rentals)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Kit Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dayRate',
      title: 'Day Rate (USD)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'mainImage',
      title: 'Kit Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Camera Packages', value: 'camera' },
          { title: 'Lighting Rigs', value: 'lighting' },
          { title: 'Audio & Grip', value: 'audio-grip' },
        ],
      },
    }),
    defineField({
      name: 'specs',
      title: 'Included Specifications',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List major gear included (e.g., "RED Komodo 6K", "2x Cine Lenses")',
    }),
  ],
});