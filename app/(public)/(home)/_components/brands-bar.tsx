import Marquee from "react-fast-marquee";
import Image from "next/image";
import { prisma } from "@/lib/prisma";

export const BrandsBar = async () => {
  const brands = await prisma.brand.findMany();

  if (brands.length === 0) return null;

  return (
    <div className="bg-foreground py- absolute bottom-0 flex min-h-[80px] w-full overflow-hidden">
      <Marquee
        speed={50}
        gradient={false}
        autoFill
        className="overflow-y-hidden"
        pauseOnHover
      >
        <div className="flex h-full items-center justify-center">
          {brands.map(({ name, image }) => (
            <Image
              key={name}
              src={image as string}
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
