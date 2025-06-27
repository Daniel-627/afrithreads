import { Rule } from 'sanity'

const variant = {
  name: 'variant',
  title: 'Variant',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'grams',
      title: 'Weight in grams',
      type: 'number',
    },
    {
      name: 'price',
      title: 'Price (KES)',
      type: 'number',
      validation: (Rule: Rule) => Rule.required().positive(),
    },
    {
      name: 'sku',
      title: 'SKU',
      type: 'string',
    },
    {
      name: 'taxable',
      title: 'Taxable',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'stock',
      title: 'Stock',
      type: 'number',
      validation: (Rule: Rule) => Rule.min(0),
    },
    {
      name: 'isAvailable',
      title: 'Available?',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'size',
      title: 'Size',
      type: 'string',
      options: {
        list: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        layout: 'dropdown',
      },
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      options: {
        layout: 'grid',
      },
    },
    {
      name: 'barcode',
      title: 'Bar code',
      type: 'barcode', // Make sure this is defined or installed
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'size',
      media: 'images.0',
    },
  },
}

export default variant
