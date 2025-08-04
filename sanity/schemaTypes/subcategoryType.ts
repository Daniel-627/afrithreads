import { FolderIcon } from '@sanity/icons';
import { defineType, defineField } from 'sanity';

export const subcategoryType = defineType({
  name: 'subcategory',
  title: 'Subcategory',
  type: 'document',
  icon: FolderIcon,
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
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Subcategory visual or thumbnail.',
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
