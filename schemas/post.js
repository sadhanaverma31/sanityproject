const localeString= {
  
    name: 'localeString',
    title: 'Localized String',
    type: 'object',
    fields:[
      {
      name: 'en',
      title: 'English',
      type: 'string'
      },
      {
        name: 'mi',
        title: 'Maori',
        type: 'string'
        }
    ]
  
}


export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type:'localeString'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
