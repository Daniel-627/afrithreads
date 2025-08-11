import { TagIcon } from '@sanity/icons'
import { defineType, defineField, defineArrayMember } from 'sanity'

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
    // 💰 Pricing
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
    // 📦 Stock Management
    defineField({
      name: 'stock',
      title: 'Total Stock',
      type: 'number',
      validation: Rule => Rule.min(0),
    }),

    // 🔖 Promotional Flags
    defineField({
      name: 'featured',
      title: 'Featured Product?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'bestSeller',
      title: 'Best Seller?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'newArrival',
      title: 'New Arrival?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'popular',
      title: 'Popular Product?',
      type: 'boolean',
      initialValue: false,
    }),

    // 📸 Media
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
      validation: Rule => Rule.min(1),
    }),

    // 🔗 Relationships
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
      type: 'string',
      options: {
        list: [
          { title: 'Men', value: 'men' },
          { title: 'Women', value: 'women' },
          { title: 'Kids', value: 'kids' },
          { title: 'Unisex', value: 'unisex' },
          { title: 'All', value: 'all' } // 👈 5th option
        ],
        layout: 'dropdown',
      },
      validation: Rule => Rule.required(),
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

    // 🔄 Variants
    defineField({
      name: 'variants',
      title: 'Variants',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'variant',
        }),
      ],
      validation: Rule => Rule.min(1),
    }),

    // ✏️ Descriptions & Tags
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'body',
      title: 'Product Description',
      type: 'blockContent',
      validation: Rule => Rule.required(),
    }),

    // 🌐 SEO (optional)
    defineField({
      name: 'seo',
      title: 'SEO & Meta',
      type: 'seo', // Assuming you’ll define a custom object type for this
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
