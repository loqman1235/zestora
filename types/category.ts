import { Prisma } from "@prisma/client";

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

export type CategoryColumnType = Prisma.CategoryGetPayload<{
  include: {
    children: true;
    slug: true;
    name: true;
    parent: true;
  };
}>;
