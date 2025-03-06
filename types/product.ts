import { Category } from "./category";

export interface Product {
  id: string;
  image: string;
  name: string;
  slug: string;
  price: number;
  discountPrice?: number;
  ratings: number[];
  category: Category;
}
