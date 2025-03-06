import { Separator } from "@/components/ui/separator";
import { BreadCrumb } from "./_components/BreadCrumb";
import { StarRating } from "@/components/global/star-rating";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";
import { ProductPreview } from "./_components/product-preview";

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{
    categorySlug: string;
    subCategorySlug: string;
    productSlug: string;
  }>;
}) => {
  const { categorySlug, subCategorySlug } = await params;

  return (
    <div className="mx-auto max-w-7xl px-5 md:px-20">
      <Separator />

      <BreadCrumb
        categorySlug={categorySlug}
        subCategorySlug={subCategorySlug}
      />

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* PRODUCT PREVIEW IMAGES */}
        <ProductPreview
          images={[
            "/images/product-preview/1.png",
            "/images/product-preview/2.png",
            "/images/product-preview/3.png",
          ]}
        />
        {/* PRODUCT DETAILS */}
        <div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <h1 className="font-playfair text-2xl font-bold tracking-wide uppercase md:text-3xl">
                Enamel Long Sleeved Shirt
              </h1>
              <StarRating ratings={[5, 4, 4, 3, 5]} />
              <h3 className="text-primary text-lg font-bold tracking-tighter md:text-2xl">
                {formatPrice(260)}
              </h3>
            </div>
            <p className="text-muted-foreground mt-3">
              This graphic t-shirt which is perfect for any occasion. Crafted
              from a soft and breathable fabric, it offers superior comfort and
              style.
            </p>
          </div>
          <Separator className="my-5" />
          {/* SELECT COLOR */}
          <div className="flex flex-col gap-3">
            <h3 className="text-muted-foreground">Select Colors</h3>
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-full bg-[#1B1B1B]" />
              <div className="size-8 rounded-full bg-[#314F4A]" />
              <div className="size-8 rounded-full bg-[#31344F]" />
            </div>
          </div>
          <Separator className="my-5" />
          {/* SELECT SIZE */}
          <div className="flex flex-col gap-3">
            <h3 className="text-muted-foreground">Choose Size</h3>
            <div className="flex items-center gap-2">
              <Button className="rounded-full" variant="outline">
                Small
              </Button>
              <Button className="rounded-full">Medium</Button>
              <Button className="rounded-full" variant="outline">
                Large
              </Button>
              <Button className="rounded-full" variant="outline">
                Extra Large
              </Button>
            </div>
          </div>
          <Separator className="my-5" />
          {/* ADD TO CART */}
          <div className="flex gap-3">
            <div className="bg-muted flex w-[120px] items-center justify-evenly gap-2 rounded-full p-1">
              <button className="cursor-pointer">
                <MinusIcon className="size-4" />
              </button>
              <span>1</span>
              <button className="cursor-pointer">
                <PlusIcon className="size-4" />
              </button>
            </div>
            <Button className="flex-1 rounded-full" size="lg">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      {/* TODO: ADD REVIEWS SECTION */}
    </div>
  );
};
export default ProductDetailsPage;
