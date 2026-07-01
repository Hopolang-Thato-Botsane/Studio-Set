import { defineField, defineType } from 'sanity';

export const footerType = defineType({
  name: 'footerConfig',
  title: 'Global Footer Configuration',
  type: 'document',
  fields: [
    /* --- MARKETING VARIANT FIELDS --- */
    defineField({
      name: 'ctaHeading',
      title: 'Marketing CTA Heading',
      type: 'string',
      initialValue: 'Apply for access to the Studio & Set ecosystem',
    }),
    defineField({
      name: 'ctaButtonText',
      title: 'Marketing CTA Button Label',
      type: 'string',
      initialValue: 'Secure Access',
    }),
    defineField({
      name: 'ctaButtonLink',
      title: 'Marketing CTA Button Route',
      type: 'string',
      initialValue: '/request-access',
    }),
    defineField({
      name: 'bannerImage',
      title: 'Marketing Background Image',
      type: 'image',
      options: { hotspot: true },
    }),

    /* --- CAPSULE STORE VARIANT FIELDS --- */
    defineField({
      name: 'storeCtaHeading',
      title: 'Store CTA Heading',
      type: 'string',
      initialValue: 'COMING SOON\nSign up to stay updated.',
    }),
    defineField({
      name: 'storeCtaButtonText',
      title: 'Store Button Label',
      type: 'string',
      initialValue: 'Stay Tuned In',
    }),
    defineField({
      name: 'storeBannerImage',
      title: 'Store Background Image',
      type: 'image',
      options: { hotspot: true },
    }),

    /* --- SHARED LINK LISTS --- */
    defineField({
      name: 'studioLinks',
      title: 'Studio/Orders Links (Column 1)',
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
      title: 'Showroom/Shop Links (Column 2)',
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
      title: 'Contact Links (Column 3)',
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
  ],
});