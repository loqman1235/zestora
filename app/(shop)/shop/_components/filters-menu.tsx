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
import { cn } from "@/lib/utils";
import { CheckIcon, SlidersVerticalIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

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
const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

export const FiltersMenu = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    searchParams.get("categories")?.split(",") || [],
  );
  const [selectedGenders, setSelectedGenders] = useState<string[]>(
    searchParams.get("genders")?.split(",") || [],
  );

  const [priceRange, setPriceRange] = useState<number[]>([
    parseInt(searchParams.get("minPrice") || "0"),
    parseInt(searchParams.get("maxPrice") || "500"),
  ]);

  const [selectedColors, setSelectedColors] = useState<string[]>(
    searchParams.get("colors")?.split(",") || [],
  );
  const [selectedSizes, setSelectedSizes] = useState<string[]>(
    searchParams.get("sizes")?.split(",") || [],
  );

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  const toggleGender = (gender: string) => {
    setSelectedGenders((prev) =>
      prev.includes(gender)
        ? prev.filter((c) => c !== gender)
        : [...prev, gender],
    );
  };

  const toggleColor = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color],
    );
  };

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((c) => c !== size) : [...prev, size],
    );
  };

  const applyFilters = () => {
    const params = new URLSearchParams();

    if (selectedCategories.length) {
      params.set(
        "categories",
        selectedCategories.map((c) => c.toLowerCase()).join(","),
      );
    } else {
      params.delete("categories");
    }

    if (selectedGenders.length) {
      params.set(
        "genders",
        selectedGenders.map((g) => g.toLowerCase()).join(","),
      );
    } else {
      params.delete("genders");
    }

    if (priceRange[0] !== 0) {
      params.set("minPrice", priceRange[0].toString());
    } else {
      params.delete("minPrice");
    }

    if (priceRange[1] !== 500) {
      params.set("maxPrice", priceRange[1].toString());
    } else {
      params.delete("maxPrice");
    }

    if (selectedColors.length) {
      params.set(
        "colors",
        selectedColors.map((c) => c.toLowerCase()).join(","),
      );
    } else {
      params.delete("colors");
    }

    if (selectedSizes.length) {
      params.set("sizes", selectedSizes.map((s) => s.toLowerCase()).join(","));
    } else {
      params.delete("sizes");
    }

    router.push(`?${params.toString()}`);
  };

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
                  <Checkbox
                    id={`category-${category}`}
                    className="size-4"
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={() => toggleCategory(category)}
                  />
                  <Label htmlFor={`category-${category}`} className="text-base">
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
                  <Checkbox
                    id={`gender-${gender}`}
                    className="size-4"
                    checked={selectedGenders.includes(gender)}
                    onCheckedChange={() => toggleGender(gender)}
                  />
                  <Label htmlFor={`gender-${gender}`} className="text-base">
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
                step={5}
                onValueChange={(val) => setPriceRange([val[0], val[1]])}
              />
              <div className="text-muted-foreground flex justify-between text-sm">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
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
                  className={cn(
                    "border-border flex size-8 cursor-pointer items-center justify-center rounded-full border",
                    color === "white" ? "text-black" : "text-white",
                  )}
                  style={{ backgroundColor: color }}
                  onClick={() => toggleColor(color)}
                  aria-label={color}
                >
                  {selectedColors.includes(color) && (
                    <CheckIcon className="size-4" />
                  )}
                </button>
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
                  variant={selectedSizes.includes(size) ? "default" : "outline"}
                  className="min-w-[50px] cursor-pointer rounded-full"
                  onClick={() => toggleSize(size)}
                >
                  {size}
                </Button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button
        onClick={applyFilters}
        size="lg"
        className="w-full cursor-pointer rounded-full"
      >
        Apply Filters
      </Button>
    </aside>
  );
};
