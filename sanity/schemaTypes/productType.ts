import {TagIcon} from '@sanity/icons'
import {defineType, defineField, defineArrayMember} from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().min(3),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Base Price (KES)',
      type: 'number',
      validation: Rule => Rule.required().positive(),
    }),
    defineField({
      name: 'stock',
      title: 'Total Stock',
      type: 'number',
      validation: Rule => Rule.min(0),
    }),
    defineField({
      name: 'featured',
      title: 'Featured?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
        }),
      ],
      options: {
        layout: 'grid',
      },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'subcategory',
      title: 'Subcategory',
      type: 'reference',
      to: [{ type: 'subcategory' }],
    }),
    defineField({
      name: 'audience',
      title: 'Target Audience',
      type: 'reference',
      to: [{ type: 'audience' }],
    }),
    defineField({
      name: 'collection',
      title: 'Collection',
      type: 'reference',
      to: [{ type: 'collection' }],
    }),
    defineField({
      name: 'vendor',
      title: 'Vendor',
      type: 'reference',
      to: [{ type: 'vendor' }],
    }),
    defineField({
      name: 'variants',
      title: 'Variants',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'variant',
        }),
      ],
    }),    
    defineField({
      name: 'body',
      title: 'Product Description',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images.0',
      subtitle: 'category.title',
    },
  },
})
