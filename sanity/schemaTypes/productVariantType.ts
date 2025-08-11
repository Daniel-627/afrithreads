import { PackageIcon } from '@sanity/icons';
import { defineType, defineField } from 'sanity';

export const productVariantType = defineType({
  name: 'variant',
  title: 'Product Variant',
  type: 'object',
  icon: PackageIcon,
  fields: [
    defineField({
      name: 'sku',
      title: 'SKU (optional)',
      type: 'string',
      description: 'Unique code for internal tracking or fulfillment systems.',
    }),
    defineField({
      name: 'currentPrice',
      title: 'Current Price (KES)',
      type: 'number',
      description: 'Selling price (or lowest variant price if applicable)',
      validation: Rule => Rule.required().positive(),
    }),
    defineField({
      name: 'originalPrice',
      title: 'Original Price (KES)',
      type: 'number',
      description: 'Price before discount. Leave empty if no discount.',
    }),
    defineField({
      name: 'stock',
      title: 'Stock Quantity',
      type: 'number',
      validation: Rule => Rule.min(0),
    }),
    defineField({
      name: 'sizeType',
      title: 'Size System',
      type: 'string',
      options: {
        list: ['US', 'UK', 'EU', 'One Size'],
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'size',
      title: 'Size',
      type: 'string',
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Variant Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'notes',
      title: 'Notes (Optional)',
      type: 'string',
      description: 'Internal notes, e.g., "limited batch", "runs small".',
    }),
  ],
  preview: {
    select: {
      title: 'sku',
      subtitle: 'color',
      media: 'image',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Unnamed Variant',
        subtitle: subtitle ? `Color: ${subtitle}` : 'No color specified',
        media,
      };
    },
  },
});
