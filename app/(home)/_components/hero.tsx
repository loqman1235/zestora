import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BrandsBar } from "./brands-bar";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="bg-muted relative min-h-[calc(100vh-4rem)] overflow-hidden pt-10 md:pt-0">
      <div className="mx-auto flex h-[calc(100%-100px)] max-w-7xl flex-col items-center justify-center px-5 md:flex-row md:justify-between md:px-20">
        {/* Hero text */}
        <div className="flex w-full flex-col items-center gap-4 text-center md:w-1/2 md:items-start md:text-left">
          <h1 className="font-playfair text-4xl font-black tracking-wide uppercase md:text-6xl">
            Find clothes that fit your style
          </h1>
          <p className="text-muted-foreground">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Button className="min-w-[200px] rounded-full py-6" size="lg" asChild>
            <Link href="/shop">Shop Now</Link>
          </Button>
        </div>

        <div className="relative flex max-w-[300px] items-center justify-center">
          <Image
            className="absolute top-20 right-0"
            src="/images/star.svg"
            alt="star"
            width={80}
            height={80}
          />
          <Image
            className="drop-shadow-lg grayscale transition-all duration-300 hover:grayscale-0"
            src="/images/hero-img2.png"
            alt="hero"
            width={340}
            height={340}
          />
          <Image
            className="absolute bottom-24 -left-20 md:bottom-20"
            src="/images/star.svg"
            alt="star"
            width={50}
            height={50}
          />
        </div>
      </div>

      <BrandsBar />
    </div>
  );
};
