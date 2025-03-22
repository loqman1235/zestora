import { Section } from "@/components/global/section";
import { Hero } from "./_components/hero";
// import { topSelling } from "@/mocks/products";
import { Separator } from "@/components/ui/separator";
import { BrowseSection } from "./_components/browse-section";
import { Testimonies } from "./_components/testimonies";
import { prisma } from "@/lib/prisma";

const HomePage = async () => {
  const newArrivals = await prisma.product.findMany({
    where: {
      isActive: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 4,
    include: {
      brand: true,
      category: {
        select: {
          slug: true,
          name: true,
          children: true,
        },
      },
      variants: {
        include: {
          images: true,
        },
      },
    },
  });

  console.log("New arrivals", newArrivals);

  return (
    <>
      <Hero />
      <div className="mx-auto max-w-7xl px-5 md:px-20">
        <Section
          title="New Arrivals"
          products={newArrivals}
          href="/new-arrivals"
        />
        <Separator />
        {/* <Section
          title="Top Selling"
          products={topSelling}
          href="/top-selling"
        /> */}
        <BrowseSection />
      </div>
      <Testimonies />
    </>
  );
};
export default HomePage;
