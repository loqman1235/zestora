import { categories } from "@/mocks/products";
import Image from "next/image";
import Link from "next/link";

export const BrowseSection = () => {
  return (
    <div className="bg-muted flex flex-col items-center justify-center gap-10 rounded-2xl p-10">
      <h2 className="font-playfair text-2xl font-bold tracking-wide uppercase md:text-3xl">
        Browse by dress style
      </h2>

      <div className="grid-cols-2s grid w-full gap-5 md:grid-cols-3">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/${cat.name}`}
            className="bg-background relative h-[289px] w-full overflow-hidden rounded-xl"
          >
            <Image
              className="absolute right-0"
              src={cat.image}
              alt={cat.name}
              width={220}
              height={220}
            />
            <h3 className="absolute top-5 left-5 text-2xl font-bold">
              {cat.name}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};
