const collection = {
    name: 'collection',
    title: 'Collection',
    type: 'document',
    fields: [
      { name: 'title', title: 'Title', type: 'string' },
      { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
      { name: 'season', title: 'Season', type: 'string' },
      { name: 'description', title: 'Description', type: 'text' },
      { name: 'launchDate', title: 'Launch Date', type: 'datetime' },
    ],
  }
  
  export default collection
  