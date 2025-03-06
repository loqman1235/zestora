export interface Product {
  id: string;
  image: string;
  name: string;
  slug: string;
  price: number;
  discountPrice?: number;
  ratings: number[];
}

export interface Category {
  id: string;
  name: string;
  image: string;
}
