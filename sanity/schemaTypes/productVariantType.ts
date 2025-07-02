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
      name: 'size',
      title: 'Size',
      type: 'string',
      options: {
        list: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        layout: 'dropdown',
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'color',
      subtitle: 'size',
    },
    prepare({ title, subtitle }) {
      return {
        title: `Color: ${title}`,
        subtitle: `Size: ${subtitle}`,
      };
    },
  },
});
