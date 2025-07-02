import { PackageIcon } from '@sanity/icons';
import { defineType, defineField } from 'sanity';

export const productVariantType = defineType({
  name: 'variant',
  title: 'Variant',
  type: 'object',
  icon: PackageIcon,
  fields: [
    defineField({
      name: 'sizeType',
      title: 'Sizing System',
      type: 'string',
      options: {
        list: ['US', 'UK', 'EU', 'INT'],
        layout: 'dropdown',
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'sizes',
      title: 'Available Sizes',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        layout: 'tags', // Allows multiple + custom values
      },
      validation: Rule => Rule.min(1),
    }),
    defineField({
      name: 'colors',
      title: 'Available Colors',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags', // Allows multiple + custom values
      },
      validation: Rule => Rule.min(1),
    }),
  ],
  preview: {
    select: {
      title: 'sizeType',
      subtitle: 'sizes',
    },
    prepare({ title, subtitle }) {
      const subtitleText = Array.isArray(subtitle) ? subtitle.join(', ') : subtitle;
      return {
        title: `System: ${title}`,
        subtitle: `Sizes: ${subtitleText}`,
      };
    },
  },
});
