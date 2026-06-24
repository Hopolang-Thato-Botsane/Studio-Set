import { defineField, defineType } from 'sanity';

export const footerType = defineType({
  name: 'footerConfig',
  title: 'Global Footer Configuration',
  type: 'document',
  fields: [
    defineField({
      name: 'ctaHeading',
      title: 'CTA Board Heading',
      type: 'string',
      initialValue: 'Apply for access to the Studio & Set ecosystem',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaButtonText',
      title: 'CTA Button Label',
      type: 'string',
      initialValue: 'Secure Access',
    }),
    defineField({
      name: 'ctaButtonLink',
      title: 'CTA Button Destination Route',
      type: 'string',
      initialValue: '/request-access',
    }),
    defineField({
      name: 'bannerImage',
      title: 'CTA Board Background Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'studioLinks',
      title: 'Studio Category Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Link Label', type: 'string' },
            { name: 'route', title: 'Target Route Link', type: 'string' }
          ]
        }
      ],
    }),
    defineField({
      name: 'showroomLinks',
      title: 'Showroom Category Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Link Label', type: 'string' },
            { name: 'route', title: 'Target Route Link', type: 'string' }
          ]
        }
      ],
    }),
    defineField({
      name: 'contactLinks',
      title: 'Contact Category Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Link Label', type: 'string' },
            { name: 'route', title: 'Target Route Link', type: 'string' }
          ]
        }
      ],
    }),
    defineField({
    name: 'copyrightText',
    title: 'Copyright Label Statement',
    type: 'string',
    initialValue: '© Studio&Set. 2026.',
    }),
    defineField({
    name: 'legalLinks',
    title: 'Baseline Legal Links (Bottom Right)',
    type: 'array',
    of: [
        {
        type: 'object',
        fields: [
            { name: 'label', title: 'Link Label', type: 'string' },
            { name: 'route', title: 'Target Route Link', type: 'string' }
        ]
        }
    ],
    })
  ],
});