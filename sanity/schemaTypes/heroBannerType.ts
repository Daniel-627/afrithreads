import { MobileDeviceIcon } from '@sanity/icons';
import { defineType, defineField } from 'sanity';

export const heroBannerType = defineType({
  name: 'heroBanner',
  title: 'Hero Banner',
  type: 'document',
  icon: MobileDeviceIcon,
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({
      name: 'image',
      title: 'Banner Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({ name: 'ctaLabel', title: 'CTA Label', type: 'string' }),
    defineField({ name: 'ctaLink', title: 'CTA Link', type: 'url' }),
    defineField({ name: 'startDate', title: 'Start Date', type: 'datetime' }),
    defineField({ name: 'endDate', title: 'End Date', type: 'datetime' }),
    defineField({
      name: 'countdownTarget',
      title: 'Countdown Target (Ends At)',
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
