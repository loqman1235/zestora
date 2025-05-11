import { Prisma } from "@prisma/client";

export type ProductWithDetails = Prisma.ProductGetPayload<{
  include: {
    variants: {
      include: {
        images: true;
      };
    };
    category: {
      select: {
        children: true;
        slug: true;
        name: true;
      };
    };
    brand: true;
  };
}>;

export type ProductColumnType = Prisma.ProductGetPayload<{
  select: {
    price: true;
    slug: true;
    name: true;
    isActive: true;
    isFeatured: true;
    thumbnail: true;
  };
  include: {
    variants: {
      include: {
        images: true;
      };
    };
    category: {
      select: {
        children: true;
        slug: true;
        name: true;
        parent: true;
      };
    };
  };
}>;
