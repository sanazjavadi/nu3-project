export type cardItem = {
  id: string;
  image: string;
  link: string;
  title: string;
  price: string | number;
  vendor: string;
  qty: number;
};

export type Items = {
  basketItems: Array<cardItem>;
};

export type Product = {
  product: productCard | undefined;
  loading: boolean;
};

type productCard = {
  id: string;
  title: string;
  body_html: string;
  vendor: string;
  product_type: string;
  created_at: string;
  handle: string;
  url: string;
  updated_at: string;
  published_at: string;
  variants: [variant];
  options: [option];
  images: [image];
  image: image;
};

export type variant = {
  id: number;
  title: string;
  product_id: number;
  price: string | number;
  sku: string;
  position: number;
  compare_at_price: string;
  fulfillment_service: string;
  inventory_management: string;
  option1: string;
  option2: null;
  option3: null;
  created_at: string;
  updated_at: string;
  taxable: boolean;
  barcode: string;
  grams: number;
  image_id: number;
  weight: number;
  weight_unit: string;
  tax_code: string;
  requires_shipping: boolean;
};

type option = {
  id: number;
  product_id: number;
  name: string;
  position: number;
  values: [string];
};

export type image = {
  id: number;
  product_id: number;
  position: number;
  created_at: string;
  updated_at: string;
  alt: null;
  width: number;
  height: number;
  src: string;
  variant_ids: [number];
};

export type Products = {
  products: Array<product> | [];
  loading: boolean;
};

export type product = {
  [key: string]: string;
};
