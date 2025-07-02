import { defineType, defineField } from 'sanity'
import { MegaphoneIcon } from '@sanity/icons'

export const primaryBannerType = defineType({
  name: 'primaryBanner',
  title: 'Primary Banner',
  type: 'document',
  icon: MegaphoneIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Banner Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Banner Image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'CTA Link',
      type: 'url',
    }),
    defineField({
      name: 'linkLabel',
      title: 'CTA Label',
      type: 'string',
      initialValue: 'Shop Now',
    }),
    defineField({
      name: 'bannerType',
      title: 'Banner Type',
      type: 'string',
      options: {
        list: [
          { title: 'Hero', value: 'hero' },
          { title: 'Promo', value: 'promo' },
          { title: 'Secondary', value: 'secondary' },
        ],
        layout: 'radio',
      },
      initialValue: 'hero',
    }),
    defineField({
      name: 'isActive',
      title: 'Display Banner?',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showCountdown',
      title: 'Show Countdown?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date (Optional)',
      type: 'datetime',
    }),
    defineField({
      name: 'endDate',
      title: 'End Date (Optional)',
      type: 'datetime',
    }),
    defineField({
      name: 'priority',
      title: 'Priority (Optional)',
      type: 'number',
      description: 'Lower number means higher priority',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color (Optional)',
      type: 'string',
    }),
    defineField({
      name: 'textColor',
      title: 'Text Color (Optional)',
      type: 'string',
    }),
    defineField({
      name: 'overlayOpacity',
      title: 'Overlay Opacity (Optional)',
      type: 'number',
      description: 'Use a number between 0 and 1 (e.g., 0.5)',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'bannerType',
      media: 'image',
    },
  },
})
