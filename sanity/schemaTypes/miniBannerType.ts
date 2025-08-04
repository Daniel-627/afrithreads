import { DocumentIcon } from '@sanity/icons';
import { defineType, defineField } from 'sanity';

export const miniBannerType = defineType({
  name: 'miniBanner',
  title: 'Mini Banner',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({
      name: 'image',
      title: 'Mini Banner Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({ name: 'ctaLink', title: 'Link to', type: 'url' }),
  ],
});
