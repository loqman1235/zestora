import { AddProductForm } from "./_components/add-product-form";
import { prisma } from "@/lib/prisma";

const AddNewProductPage = async () => {
  const categories = await prisma.category.findMany({
    select: { id: true, name: true },
  });
  const brands = await prisma.brand.findMany({
    select: { id: true, name: true },
  });

  return <AddProductForm categories={categories} brands={brands} />;
};
export default AddNewProductPage;
