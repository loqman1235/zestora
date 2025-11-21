import { Separator } from "@/components/ui/separator";
// import { similarProducts } from "@/mocks/products";
// import { ProductCard } from "@/components/global/product-card";
import { CustomBreadcrump } from "@/components/global/custom-breadcrump";
import { prisma } from "@/lib/prisma";
import { ProductDetails } from "./_components/product-details";
import { slugToTitle } from "@/lib/utils";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ productSlug: string }>;
}) {
  const { productSlug } = await params;

  const product = await prisma.product.findFirst({
    where: { slug: productSlug },
  });

  return {
    title: product?.name,
    description: product?.description,
  };
}

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{
    categorySlug: string;
    subCategorySlug: string;
    productSlug: string;
  }>;
}) => {
  const { categorySlug, subCategorySlug, productSlug } = await params;

  const product = await prisma.product.findFirst({
    where: {
      slug: productSlug,
    },
    include: {
      images: true,
      category: {
        include: {
          children: true,
        },
      },
      brand: true,
      variants: {
        include: {
          images: true,
        },
      },
    },
  });

  return (
    <div className="mx-auto max-w-7xl px-5 md:px-20">
      <Separator />

      <CustomBreadcrump
        paths={[
          { label: "Home", href: "/" },
          { label: "Shop", href: "/shop" },
          { label: slugToTitle(categorySlug), href: `/shop/${categorySlug}` },
          { label: slugToTitle(subCategorySlug) },
        ]}
      />

      {product && <ProductDetails product={product} />}

      {/* TODO: ADD REVIEWS SECTION */}

      {/* SIMILAR PRODUCTS */}
      {/* <div className="my-10 flex flex-col gap-5 md:my-20">
        <h2 className="font-playfair text-center text-2xl font-bold tracking-wide uppercase md:text-3xl">
          You may also like
        </h2>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {similarProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div> */}
    </div>
  );
};
export default ProductDetailsPage;
