import { defineType, defineField } from 'sanity'
import { TagIcon } from '@sanity/icons'

export const secondaryBannerType = defineType({
  name: 'secondaryBanner',
  title: 'Secondary Banner',
  type: 'document',
  icon: TagIcon,
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
      name: 'isActive',
      title: 'Display Banner?',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'datetime',
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'datetime',
    }),
    defineField({
      name: 'showCountdown',
      title: 'Show Countdown?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'priority',
      title: 'Priority',
      type: 'number',
      description: 'Lower number = higher priority',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'image',
    },
  },
})
