"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { testimonies } from "@/mocks/testimonies";
import { CheckIcon } from "lucide-react";
import { IoStar } from "react-icons/io5";

export const Testimonies = () => {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-10 overflow-x-hidden px-5 py-10 md:px-20">
      {/* HEADER */}
      <div>
        <h2 className="font-playfair text-3xl font-bold tracking-tight uppercase">
          Testimonies
        </h2>

        {/* buttons here */}
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnMouseEnter: true,
          }),
        ]}
      >
        <CarouselContent className="mx-auto max-w-7xl px-5 md:px-20">
          {testimonies.map((testimony) => (
            <CarouselItem
              key={testimony.id}
              className="pl-5 md:basis-1/2 lg:basis-1/3"
            >
              <Card className="min-h-[240px]">
                <CardContent className="flex flex-col gap-2">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <IoStar key={index} className="size-5 text-[#FFC633]" />
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <div>
                      <p className="font-bold">{testimony.name}</p>
                    </div>
                    <span className="flex size-4 items-center justify-center rounded-full bg-[#01AB31] text-white">
                      <CheckIcon className="size-3" />
                    </span>
                  </div>
                  <p className="text-muted-foreground">{testimony.text}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
