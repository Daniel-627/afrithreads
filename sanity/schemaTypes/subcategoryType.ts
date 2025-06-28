import {BookmarkIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'

export const subcategoryType = defineType({
  name: 'subcategory',
  title: 'Subcategory',
  type: 'document',
  icon: BookmarkIcon,
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
      name: 'parent',
      title: 'Parent Category',
      type: 'reference',
      to: [{ type: 'category' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'parent.title',
    },
  },
})
