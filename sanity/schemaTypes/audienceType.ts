import { UsersIcon } from '@sanity/icons';
import { defineType, defineField } from 'sanity';

export const audienceType = defineType({
  name: 'audience',
  title: 'Target Audience',
  type: 'document',
  icon: UsersIcon,
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'label', maxLength: 96 },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Audience Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Optional — used in filters or promos.',
    }),
    defineField({
      name: 'seo',
      title: 'SEO & Meta',
      type: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'label',
      media: 'image',
    },
  },
});
