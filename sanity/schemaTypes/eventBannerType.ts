import { ClockIcon } from '@sanity/icons';
import { defineType, defineField } from 'sanity';

export const eventBannerType = defineType({
  name: 'eventBanner',
  title: 'Event Banner',
  type: 'document',
  icon: ClockIcon,
  fields: [
    defineField({ name: 'title', title: 'Event Title', type: 'string' }),
    defineField({ name: 'description', title: 'Short Description', type: 'text' }),
    defineField({
      name: 'image',
      title: 'Event Visual',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({ name: 'eventDate', title: 'Event Date', type: 'datetime' }),
    defineField({
      name: 'countdownEnabled',
      title: 'Show Countdown?',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showAsPopup',
      title: 'Display as Modal Popup?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({ name: 'ctaLabel', title: 'CTA Label', type: 'string' }),
    defineField({ name: 'ctaLink', title: 'CTA Link', type: 'url' }),
  ],
});
