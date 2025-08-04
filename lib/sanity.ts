import { client } from '@/sanity/lib/client';
import { SanityImage } from '@/types/sanity'


export const getAllProductsQuery = `
*[_type == "product"]{
  _id,
  title,
  slug,
  price,
  featured,
  "category": category->title,
  "subcategory": subcategory->title,
  "audience": audience->title,
  "collection": collection->title,
  "vendor": vendor->name,
  images,
  bestSeller,
  newArrival,
  popular,
  variants[]->{
    _key,
    sku,
    availableSizes,
    availableColors
  }
}
`;


export const getProductBySlugQuery = `
*[_type == "product" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  price,
  featured,
  images,
  body,
  bestSeller,
  newArrival,
  popular,
  "category": category->title,
  "subcategory": subcategory->title,
  "audience": audience->title,
  "collection": collection->title,
  "vendor": {
    name: vendor->name,
    website: vendor->website,
    email: vendor->email,
    phone: vendor->phone,
    socials: vendor->socials,
    image: vendor->image
  },
  variants[]->{
    _key,
    sku,
    availableSizes,
    availableColors
  },
  sizeType,
  sizes,
  colors
}
`;


export const getFeaturedProductsQuery = `
*[_type == "product" && (featured == true || bestSeller == true || newArrival == true || popular == true)]{
  _id,
  title,
  slug,
  price,
  featured,
  bestSeller,
  newArrival,
  popular,
  images,
  "collection": collection->title
}
`;


export const getCollectionsQuery = `
*[_type == "collection"]{
  _id,
  title,
  slug,
  image,
  description
}
`;


export const getAllCategoriesQuery = `*[_type == "category"]{
  _id,
  title,
  slug,
  image
}`;

export const getCategoryBySlugQuery = (slug: string) => `
  *[_type == "category" && slug.current == "${slug}"][0]{
    _id,
    title,
    image,
    "products": *[_type == "product" && references(^._id)]{
      _id,
      title,
      slug,
      images,
      price
    }
  }
`;

export const getAllSubcategoriesQuery = `*[_type == "subcategory"]{
  _id,
  title,
  slug,
  image
}`;


export const getSubcategoryBySlugQuery = (slug: string) => `
  *[_type == "subcategory" && slug.current == "${slug}"][0]{
    _id,
    title,
    image,
    "products": *[_type == "product" && references(^._id)]{
      _id,
      title,
      slug,
      images,
      price
    }
  }
`;


export const getAllAudiencesQuery = `*[_type == "audience"]{
  _id,
  title,
  slug,
  image
}`;


export const getAudienceBySlugQuery = (slug: string) => `
  *[_type == "audience" && slug.current == "${slug}"][0]{
    _id,
    title,
    image,
    "products": *[_type == "product" && references(^._id)]{
      _id,
      title,
      slug,
      images,
      price
    }
  }
`;


export const getAllCollectionsQuery = `*[_type == "collection"]{
  _id,
  title,
  slug,
  image
}`;


export const getCollectionBySlugQuery = (slug: string) => `
  *[_type == "collection" && slug.current == "${slug}"][0]{
    _id,
    title,
    image,
    "products": *[_type == "product" && references(^._id)]{
      _id,
      title,
      slug,
      images,
      price
    }
  }
`;


export const getAllVendorsQuery = `*[_type == "vendor"]{
  _id,
  title,
  slug,
  image,
  website,
  email,
  phone,
  socials
}`;


export const getVendorBySlugQuery = (slug: string) => `
  *[_type == "vendor" && slug.current == "${slug}"][0]{
    _id,
    title,
    image,
    website,
    email,
    phone,
    socials,
    "products": *[_type == "product" && references(^._id)]{
      _id,
      title,
      slug,
      images,
      price
    }
  }
`;


//Banner Queries   


export const getHeroBannersQuery = `*[_type == "heroBanner" && startDate <= now() && endDate >= now()] | order(startDate desc){
  _id,
  title,
  description,
  image,
  ctaLabel,
  ctaLink,
  countdownEnabled,
  countdownTarget
}`;


export const getPromoBannersQuery = `*[_type == "promoBanner" && startDate <= now() && endDate >= now()] | order(startDate desc){
  _id,
  title,
  description,
  image,
  ctaLabel,
  ctaLink,
  countdownEnabled,
  countdownTarget
}`;


export const getMiniBannersQuery = `*[_type == "miniBanner"] | order(_createdAt desc){
  _id,
  title,
  image,
  ctaLink
}`;


export const getStoryBannersQuery = `*[_type == "storyBanner"] | order(_createdAt desc){
  _id,
  title,
  storyText,
  image,
  ctaLabel,
  ctaLink
}`;


export const getEventBannersQuery = `*[_type == "eventBanner" && eventDate >= now()] | order(eventDate asc){
  _id,
  title,
  description,
  image,
  eventDate,
  countdownEnabled,
  showAsPopup,
  ctaLabel,
  ctaLink
}`;


export const getCountdownBannersQuery = `*[
  (_type == "heroBanner" || _type == "promoBanner" || _type == "eventBanner")
  && countdownEnabled == true
  && countdownTarget >= now()
]{
  _id,
  _type,
  title,
  countdownTarget,
  image,
  ctaLabel,
  ctaLink
}`;
