import { defineField, defineType } from 'sanity';

export const merchType = defineType({
  name: 'merchProduct',
  title: 'Capsule Store (Merchandise)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Product Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('A product title is required.'),
    }),
    defineField({
      name: 'brandName',
      title: 'Brand / Manufacturer',
      type: 'string',
      initialValue: 'Studio&Set',
      description: 'Defaults to Studio&Set if left blank',
    }),
    defineField({
      name: 'price',
      title: 'Price (ZAR)',
      type: 'number',
      description: 'Enter the amount as a pure number (e.g., 550)',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'productImage',
      title: 'Product Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    // 👈 Added Custom SVG Icon upload field
    defineField({
      name: 'productIcon',
      title: 'Custom Floating Icon (SVG)',
      type: 'image',
      description: 'Upload your custom SVG design for the top-right corner badge.',
      options: {
        accept: '.svg',
      },
    }),
    defineField({
      name: 'sizes',
      title: 'Available Sizes',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      },
      initialValue: ['S', 'M', 'L', 'XL']
    }),
  ],
});