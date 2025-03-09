"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { SlidersVerticalIcon } from "lucide-react";

const categories = ["Shirts", "Jeans", "Jackets", "Shoes", "Accessories"];
const genders = ["Men", "Women"];
const colors = [
  "red",
  "blue",
  "green",
  "black",
  "white",
  "gray",
  "yellow",
  "orange",
  "purple",
  "pink",
  "brown",
  "beige",
];
const sizes = [
  "XX-Small",
  "X-Small",
  "Small",
  "Medium",
  "Large",
  "X-Large",
  "XX-Large",
];

export const FiltersMenu = () => {
  return (
    <aside className="border-border hidden h-fit w-1/4 rounded-lg border p-5 md:block">
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-bold">Filters</h4>
        <SlidersVerticalIcon className="text-muted-foreground size-5" />
      </div>
      <Separator className="my-5" />

      <Accordion type="multiple">
        {/* Category Filter */}
        <AccordionItem value="category">
          <AccordionTrigger>
            <h4 className="text-base font-bold">Category</h4>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox id={category} className="size-4" />
                  <Label htmlFor={category} className="text-base">
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="gender">
          <AccordionTrigger>
            <h4 className="text-base font-bold">Gender</h4>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {genders.map((gender) => (
                <div key={gender} className="flex items-center space-x-2">
                  <Checkbox id={gender} className="size-4" />
                  <Label htmlFor={gender} className="text-base">
                    {gender}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger>
            <h4 className="text-base font-bold">Price</h4>
          </AccordionTrigger>

          <AccordionContent>
            <div className="space-y-2">
              <Slider
                defaultValue={[0, 500]}
                className="mt-2 w-full"
                min={0}
                max={500}
              />
              <div className="text-muted-foreground flex justify-between text-sm">
                <span>$0</span>
                <span>$500</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* colors Filter */}
        <AccordionItem value="colors">
          <AccordionTrigger className="flex justify-between">
            <h4 className="text-base font-bold">Colors</h4>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-wrap gap-2">
              {colors.map((color) => (
                <button
                  key={color}
                  className="border-border size-8 rounded-full border"
                  style={{ backgroundColor: color }}
                ></button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="sizes">
          <AccordionTrigger className="flex justify-between">
            <h4 className="text-base font-bold">Sizes</h4>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <Button
                  key={size}
                  variant="secondary"
                  className="cursor-pointer rounded-full"
                >
                  {size}
                </Button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button size="lg" className="w-full rounded-full">
        Apply Filters
      </Button>
    </aside>
  );
};
