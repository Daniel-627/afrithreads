// ./schemas/vendorType.ts
import {UserIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'

export const vendorType = defineType({
  name: 'vendor',
  title: 'Vendor',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Vendor Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'website',
    },
  },
})
