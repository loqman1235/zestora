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
