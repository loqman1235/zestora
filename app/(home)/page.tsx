import { Section } from "@/components/global/section";
import { Hero } from "./_components/hero";
import { newArrivals } from "@/mocks/products";

const HomePage = () => {
  return (
    <>
      <Hero />

      <Section title="New Arrivals" products={newArrivals} />
    </>
  );
};
export default HomePage;
