import { defineType, defineField } from 'sanity'
import { SparklesIcon } from '@sanity/icons'

export const miniBannerType = defineType({
  name: 'miniBanner',
  title: 'Mini Banner',
  type: 'document',
  icon: SparklesIcon,
  fields: [
    defineField({
      name: 'message',
      title: 'Banner Message',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Optional Link',
      type: 'url',
    }),
    defineField({
      name: 'isActive',
      title: 'Display Banner?',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date (optional)',
      type: 'datetime',
    }),
    defineField({
      name: 'endDate',
      title: 'End Date (optional)',
      type: 'datetime',
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
  ],
  preview: {
    select: {
      title: 'message',
      subtitle: 'link',
    },
  },
})
