import { BasketIcon } from '@sanity/icons';
import { defineType, defineField } from 'sanity';

export const promoBannerType = defineType({
  name: 'promoBanner',
  title: 'Promo Banner',
  type: 'document',
  icon: BasketIcon,
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({
      name: 'image',
      title: 'Promo Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({ name: 'ctaLabel', title: 'CTA Label', type: 'string' }),
    defineField({ name: 'ctaLink', title: 'CTA Link', type: 'url' }),
    defineField({ name: 'startDate', title: 'Start Date', type: 'datetime' }),
    defineField({ name: 'endDate', title: 'End Date', type: 'datetime' }),
    defineField({
      name: 'countdownTarget',
      title: 'Countdown Target (Optional)',
      type: 'datetime',
    }),
    defineField({
      name: 'countdownEnabled',
      title: 'Show Countdown?',
      type: 'boolean',
      initialValue: false,
    }),
  ],
});
