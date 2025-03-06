export type SubCategory = {
  id: string;
  name: string;
  image?: string;
  slug: string;
};

export interface Category {
  id: string;
  name: string;
  image?: string;
  slug: string;
  subCategories: SubCategory[];
}

export type Categories = Category[];
