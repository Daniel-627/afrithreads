import { SparklesIcon } from '@sanity/icons';
import { defineType, defineField } from 'sanity';

export const collectionType = defineType({
  name: 'collection',
  title: 'Collection',
  type: 'document',
  icon: SparklesIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().min(2),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Collection Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Used for promotional grids or banners.',
    }),
    defineField({
      name: 'seo',
      title: 'SEO & Meta',
      type: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
});
