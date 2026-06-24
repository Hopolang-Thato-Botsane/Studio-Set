import { defineField, defineType } from 'sanity';

export const productType = defineType({
  name: 'product',
  title: 'Storefront Products',
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
    defineField({
      name: 'category',
      title: 'Category Tag',
      type: 'string',
      description: 'e.g., Merchandise, Camera Kits, Lighting',
    }),
  ],
});