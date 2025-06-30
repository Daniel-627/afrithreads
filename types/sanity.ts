export interface SanityImage {
    _type: 'image'
    asset: {
      _ref: string
      _type: 'reference'
    }
    alt?: string
  }
  
  export interface Category {
    _id: string
    _type: 'category'
    name: string
    slug: {
      _type: 'slug'
      current: string
    }
  }
  
  export interface ProductVariant {
    size?: string
    color?: string
    stock?: number
  }
  
  export interface Product {
    _id: string
    _type: 'product'
    title: string
    slug: {
      current: string
    }
    price: number
    images: SanityImage[]
    description?: string
    featured?: boolean
    category: string | Category
    variants?: ProductVariant[]
  }
  
  export interface BlogAuthor {
    name: string
    image?: SanityImage
  }
  
  export interface BlogPost {
    _id: string
    _type: 'post'
    title: string
    slug: {
      current: string
    }
    publishedAt: string
    excerpt?: string
    mainImage: SanityImage
    body: any // You can replace this with PortableTextBlock[] if you're using @portabletext/types
    author?: BlogAuthor
  }
  