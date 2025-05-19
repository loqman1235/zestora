import { prisma } from "@/lib/prisma";

export const getBrands = async () => {
  const brands = await prisma.brand.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return brands;
};
