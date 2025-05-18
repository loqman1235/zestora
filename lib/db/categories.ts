import { prisma } from "@/lib/prisma";

export const getCategories = async () => {
  const categories = await prisma.category.findMany({
    include: {
      children: true,
      parent: true,
    },
  });
  return categories;
};
