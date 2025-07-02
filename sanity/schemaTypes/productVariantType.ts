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
      title: 'Sizing Systems',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: ['US', 'UK', 'EU', 'INT'],
        layout: 'tags', // multi-select + custom values
      },
      validation: Rule => Rule.min(1),
    }),
    defineField({
      name: 'sizes',
      title: 'Available Sizes',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        layout: 'tags', // multi-select + custom values
      },
      validation: Rule => Rule.min(1),
    }),
    defineField({
      name: 'colors',
      title: 'Available Colors',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags', // multi-select + custom values
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
      const titleText = Array.isArray(title) ? title.join(', ') : title;
      const subtitleText = Array.isArray(subtitle) ? subtitle.join(', ') : subtitle;
      return {
        title: `Systems: ${titleText}`,
        subtitle: `Sizes: ${subtitleText}`,
      };
    },
  },
});
