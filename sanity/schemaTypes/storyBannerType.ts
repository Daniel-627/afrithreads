import { BookIcon } from '@sanity/icons';
import { defineType, defineField } from 'sanity';

export const storyBannerType = defineType({
  name: 'storyBanner',
  title: 'Story Banner',
  type: 'document',
  icon: BookIcon,
  fields: [
    defineField({ name: 'title', title: 'Story Title', type: 'string' }),
    defineField({
      name: 'image',
      title: 'Visual (Photo or Artwork)',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({ name: 'storyText', title: 'Story Text', type: 'text' }),
    defineField({ name: 'ctaLabel', title: 'CTA Label', type: 'string' }),
    defineField({ name: 'ctaLink', title: 'CTA Link', type: 'url' }),
  ],
});
