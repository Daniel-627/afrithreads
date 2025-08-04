import { DocumentTextIcon } from '@sanity/icons';
import { defineType, defineField } from 'sanity';

export const seoType = defineType({
  name: 'seo',
  title: 'SEO & Meta',
  type: 'object',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Used for page title and SEO. Keep under 60 characters.',
      validation: Rule => Rule.max(60),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      description: 'Brief summary for search engines and social sharing. Keep under 160 characters.',
      validation: Rule => Rule.max(160),
    }),
    defineField({
      name: 'openGraphImage',
      title: 'OG Image (for link previews)',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Optional image used when links are shared on social platforms.',
    }),
    defineField({
      name: 'keywords',
      title: 'SEO Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'Comma-separated keywords (optional, for internal or indexing use).',
    }),
  ],
  preview: {
    select: {
      title: 'metaTitle',
      subtitle: 'metaDescription',
      media: 'openGraphImage',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'No SEO Title',
        subtitle: subtitle || 'No Meta Description',
        media,
      };
    },
  },
});
