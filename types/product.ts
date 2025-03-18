import { Prisma } from "@prisma/client";

export type ProductWithDetails = Prisma.ProductGetPayload<{
  include: {
    images: {
      select: {
        url: true;
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
    variants: true;
  };
}>;
