import { Section } from "@/components/global/section";
import { Hero } from "./_components/hero";
import { newArrivals, topSelling } from "@/mocks/products";
import { Separator } from "@/components/ui/separator";
import { BrowseSection } from "./_components/browse-section";

const HomePage = () => {
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
        <Section
          title="Top Selling"
          products={topSelling}
          href="/top-selling"
        />
        <BrowseSection />
      </div>
    </>
  );
};
export default HomePage;
