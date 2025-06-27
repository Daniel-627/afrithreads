const subcategory = {
    name: 'subcategory',
    title: 'Subcategory',
    type: 'document',
    fields: [
      { name: 'title', title: 'Title', type: 'string' },
      { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
      {
        name: 'parent',
        title: 'Parent Category',
        type: 'reference',
        to: [{ type: 'category' }],
      },
    ],
  }
  
  export default subcategory
  