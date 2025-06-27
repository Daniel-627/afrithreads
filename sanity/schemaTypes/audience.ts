const audience = {
    name: 'audience',
    title: 'Target Audience',
    type: 'document',
    fields: [
      { name: 'title', title: 'Title', type: 'string' },
      { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
      { name: 'description', title: 'Description', type: 'text' },
    ],
  }
  
  export default audience
  