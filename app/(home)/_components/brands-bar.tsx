import Marquee from "react-fast-marquee";
import Image from "next/image";

const brands = [
  {
    name: "versace",
    image: "/images/brands/vercace-logo.svg",
  },
  {
    name: "zara",
    image: "/images/brands/zara-logo.svg",
  },
  {
    name: "gucci",
    image: "/images/brands/gucci-logo.svg",
  },
  {
    name: "prada",
    image: "/images/brands/prada-logo.svg",
  },
  {
    name: "calvin klein",
    image: "/images/brands/calvin-logo.svg",
  },
  {
    name: "dior",
    image: "/images/brands/dior-logo.svg",
  },
];

export const BrandsBar = () => {
  return (
    <div className="bg-foreground py- absolute bottom-0 flex min-h-[80px] w-full overflow-hidden">
      <Marquee
        speed={50}
        gradient={false}
        autoFill
        className="overflow-y-hidden"
      >
        <div className="flex h-full items-center justify-center">
          {brands.map(({ name, image }) => (
            <Image
              key={name}
              src={image}
              alt={name}
              width={80}
              height={80}
              className="mr-20"
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};
