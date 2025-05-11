import { prisma } from "@/lib/prisma";

export const getProducts = async () => {
  const products = await prisma.product.findMany({
    include: {
      variants: {
        include: {
          images: true,
        },
      },
      brand: true,
      category: {
        select: {
          slug: true,
          name: true,
          children: true,
          parent: true,
        },
      },
    },
  });
  return products;
};
