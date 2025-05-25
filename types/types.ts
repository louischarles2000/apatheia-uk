export type ProductType = {
  id: number;
  imageUrl: string;
  buttonTitle?: string;
  grammar: string;
  level: string;
  title: string;
  description: string;
  price: string;
  model: string;
  discount_price?: string;
  tags?: string;
  category_id: number;
  category_name?: string;
  meta_description?: string;
  meta_title?: string;
  meta_keywords?: string;
  images?: string[];
  image?: string;
  rating?: number;
  totalReviews?: number;
  slug: string;
}

export type CategoryType = {
  id: number;
  category_name: string;
  description: string;
  image: string;
  tags: string[];
  meta_description: string;
  meta_title: string;
  meta_keywords?: string;
  slug?: string;
  total_products: number;
}

export type ImageDataType = {
  product_image_id: number;
  product_id: number,
  image: string; // "catalog/demo/ipod_nano_3.jpg",
  sort_order: number
};

export type ArticlType = {
  article_id?: string;
  name: string;
  description: string;
  image: string;
  date: string;
  author: string;
  date_added: string;
  date_modified: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  tags: string;
}

export type CurrencyType = {
  currency_id: number;
  code: string;
  title: string;
  symbol_left: string;
  symbol_right: string;
  decimal_place: number;
  value: number;
}

export type ReviewType = {
  review_id: number;
  product_id: number;
  customer_id: number;
  author: string;
  text: string;
  rating: number;
  date_added: string;
  name: string;
}