import {SparklesIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'

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
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'season',
      title: 'Season',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'launchDate',
      title: 'Launch Date',
      type: 'datetime',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'season',
    },
  },
})
