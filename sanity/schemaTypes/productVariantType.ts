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
        layout: 'tags', // Just tag input, no dropdown
      },
    }),
    defineField({
      name: 'sizes',
      title: 'Available Sizes',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'colors',
      title: 'Available Colors',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
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
