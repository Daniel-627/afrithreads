import {PackageIcon} from '@sanity/icons'
import {defineType, defineField, defineArrayMember} from 'sanity'

export const productVariantType = defineType({
  name: 'variant',
  title: 'Variant',
  type: 'object',
  icon: PackageIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'grams',
      title: 'Weight in grams',
      type: 'number',
    }),
    defineField({
      name: 'price',
      title: 'Price (KES)',
      type: 'number',
      validation: Rule => Rule.required().positive(),
    }),
    defineField({
      name: 'sku',
      title: 'SKU',
      type: 'string',
    }),
    defineField({
      name: 'taxable',
      title: 'Taxable',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'stock',
      title: 'Stock',
      type: 'number',
      validation: Rule => Rule.min(0),
    }),
    defineField({
      name: 'isAvailable',
      title: 'Available?',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'size',
      title: 'Size',
      type: 'string',
      options: {
        list: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'string',
    }),
    defineField({
      name: 'images',
      title: 'Images',
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
      name: 'barcode',
      title: 'Barcode',
      type: 'string', // Optional fallback if you don't have a custom 'barcode' type
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'size',
      media: 'images.0',
    },
  },
})
