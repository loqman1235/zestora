export interface Product {
  id: string;
  image: string;
  name: string;
  price: number;
  ratings: number[];
}

export interface Category {
  id: string;
  name: string;
  image: string;
}
