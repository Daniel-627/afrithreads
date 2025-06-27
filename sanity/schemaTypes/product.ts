import { Rule } from 'sanity'

const product = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().min(3),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Base Price (KES)',
      type: 'number',
      validation: (Rule: Rule) => Rule.required().positive(),
    },
    {
      name: 'stock',
      title: 'Total Stock',
      type: 'number',
      validation: (Rule: Rule) => Rule.min(0),
    },
    {
      name: 'featured',
      title: 'Featured?',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      options: {
        layout: 'grid',
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'subcategory',
      title: 'Subcategory',
      type: 'reference',
      to: [{ type: 'subcategory' }],
    },
    {
      name: 'audience',
      title: 'Target Audience',
      type: 'reference',
      to: [{ type: 'audience' }],
    },
    {
      name: 'collection',
      title: 'Collection',
      type: 'reference',
      to: [{ type: 'collection' }],
    },
    {
      name: 'vendor',
      title: 'Vendor',
      type: 'reference',
      to: [{ type: 'vendor' }],
    },
    {
      name: 'variants',
      title: 'Variants',
      type: 'array',
      of: [{ type: 'variant' }],
    },
    {
      name: 'body',
      title: 'Product Description',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images.0',
      subtitle: 'category.title',
    },
  },
}

export default product
