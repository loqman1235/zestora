"use client";

import { Brand, Category } from "@prisma/client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { productSchema, ProductSchema } from "@/lib/schemas/dashboard/product";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { useEffect, useState, useTransition } from "react";
import { Dropzone } from "@/components/global/dropzone";
import slugify from "slugify";
import { CardContainer } from "@/components/global/card-container";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import { createNewProductAction } from "@/actions/product/add-product";

interface AddProductFormProps {
  brands: Pick<Brand, "id" | "name">[];
  categories: Pick<Category, "id" | "name">[];
}

export const AddProductForm = ({ brands, categories }: AddProductFormProps) => {
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const [galleryPreviews, setGalleryPreviews] = useState<string[]>([]);
  const [variantGalleryPreviews, setVariantGalleryPreviews] = useState<
    string[][]
  >([]);
  const [isPending, startTranstion] = useTransition();

  const form = useForm<ProductSchema>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      slug: "",
      description: "",
      price: 0,
      discountPrice: 0,
      inventory: 0,
      thumbnail: undefined,
      categoryId: "",
      brandId: "",
      isActive: true,
      isFeatured: false,
      productImages: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "variants",
  });

  const onSubmit = async (data: ProductSchema) => {
    startTranstion(async () => {
      const result = await createNewProductAction(data);

      if (result?.error) {
        toast.error(result.error);
      } else {
        form.reset();
        form.setValue("categoryId", "");
        form.setValue("brandId", "");
        setThumbnailPreview(null);
        setGalleryPreviews([]);
        toast.success("Product has been created");
      }
    });
  };

  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      if (name === "name") {
        const nameValue = value.name ?? "";
        const slug =
          nameValue.trim() === ""
            ? ""
            : slugify(nameValue, {
                lower: true,
                remove: /[*+~.()'"!:@]/g,
              });
        form.setValue("slug", slug, { shouldValidate: true });
      }
    });

    return () => subscription.unsubscribe();
  }, [form]);

  useEffect(() => {
    return () => {
      galleryPreviews.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [galleryPreviews]);

  useEffect(() => {
    setVariantGalleryPreviews((prev) => {
      const newPreviews = [...prev];
      while (newPreviews.length < fields.length) {
        newPreviews.push([]); // add empty array for new variant
      }
      while (newPreviews.length > fields.length) {
        const removed = newPreviews.pop();
        removed?.forEach(URL.revokeObjectURL);
      }
      return newPreviews;
    });
  }, [fields.length]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      variantGalleryPreviews.flat().forEach(URL.revokeObjectURL);
    };
  }, [variantGalleryPreviews]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-4 md:grid-cols-12"
      >
        <div className="flex flex-col gap-4 md:col-span-8">
          {/* GENERAL INFORMATION SECTION */}
          <CardContainer>
            <div>
              <h3 className="font-bold">General Information</h3>
              <p className="text-muted-foreground text-sm">
                Add general information about the product
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Product name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="slug"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Slug</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="product-name-slug" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Describe the product"
                      className="min-h-[120px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContainer>

          <CardContainer>
            <div>
              <h3 className="font-bold">Variants</h3>
              <p className="text-muted-foreground text-sm">
                Add different variants like size and color
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {fields.map((field, index) => (
                <div key={field.id} className="variant-item space-y-4">
                  <FormField
                    control={form.control}
                    name={`variants.${index}.size`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Size</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Size (e.g. M, L)" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`variants.${index}.color`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Color</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Color name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`variants.${index}.hex`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Hex</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Hex code" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`variants.${index}.price`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Price</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`variants.${index}.inventory`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Inventory</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* VARIANT IMAGES */}
                  <FormField
                    control={form.control}
                    name={`variants.${index}.images`}
                    render={({ field: imageField }) => (
                      <FormItem>
                        <FormLabel>
                          Variant Images
                          <span className="text-muted-foreground text-xs">
                            (You can upload multiple images)
                          </span>
                        </FormLabel>
                        <FormControl>
                          <Dropzone
                            multiple={true}
                            onDrop={(files) => {
                              // Revoke old previews for this variant
                              variantGalleryPreviews[index]?.forEach(
                                URL.revokeObjectURL,
                              );

                              // Create new previews
                              const urls = files.map((file) =>
                                URL.createObjectURL(file),
                              );

                              // Update previews state immutably
                              setVariantGalleryPreviews((prev) => {
                                const newPreviews = [...prev];
                                newPreviews[index] = urls;
                                return newPreviews;
                              });

                              imageField.onChange(files);
                            }}
                            className="min-h-[200px] w-full"
                          />
                        </FormControl>

                        <div className="mt-2 flex flex-wrap gap-2">
                          {(variantGalleryPreviews[index] || []).map(
                            (src, i) => (
                              <Image
                                key={i}
                                src={src}
                                width={100}
                                height={100}
                                alt={`Variant ${index + 1} Preview ${i + 1}`}
                                className="h-20 w-20 rounded-md border object-cover"
                              />
                            ),
                          )}
                        </div>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="button"
                    variant="destructive"
                    onClick={() => remove(index)}
                  >
                    <Trash2 className="size-4" />
                  </Button>
                </div>
              ))}
            </div>
            <Button
              type="button"
              variant="outline"
              onClick={() =>
                append({
                  size: "",
                  color: "",
                  price: 0,
                  inventory: 0,
                  images: [],
                  hex: "",
                })
              }
            >
              Add Variant
            </Button>
          </CardContainer>

          {/* PRICING SECTION */}
          <CardContainer>
            <div>
              <h3 className="font-bold">Pricing</h3>
              <p className="text-muted-foreground text-sm">
                Add pricing and inventory information
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price (USD)</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="discountPrice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Discount Price</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="inventory"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Inventory</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContainer>

          <CardContainer>
            <div>
              <h3 className="font-bold">Categorization</h3>
              <p className="text-muted-foreground text-sm">
                Add category & brand
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="categoryId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categories.map((cat) => (
                          <SelectItem key={cat.id} value={cat.id}>
                            {cat.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="brandId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Brand</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select brand" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {brands.map((brand) => (
                          <SelectItem key={brand.id} value={brand.id}>
                            {brand.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContainer>

          <CardContainer>
            <div>
              <h3 className="font-bold">Product Status</h3>
              <p className="text-muted-foreground text-sm">
                Set product visibility and features
              </p>
            </div>

            <div className="flex items-center gap-4">
              <FormField
                control={form.control}
                name="isActive"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-2">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel>Active</FormLabel>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="isFeatured"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-2">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel>Featured</FormLabel>
                  </FormItem>
                )}
              />
            </div>
          </CardContainer>

          {/* OPTIONAL VARIANT */}
        </div>

        {/* MEDIA SECTION */}
        <div className="md:col-span-4">
          <CardContainer className="sticky top-20">
            <div>
              <h3 className="font-bold">Media</h3>
              <p className="text-muted-foreground text-sm">
                Add media for the product
              </p>
            </div>
            <FormField
              control={form.control}
              name="thumbnail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Thumbnail{" "}
                    <span className="text-muted-foreground text-xs">
                      (JPEG, PNG, SVG, GIF, WebP)
                    </span>
                  </FormLabel>
                  <FormControl>
                    <Dropzone
                      className="min-h-[200px] w-full"
                      previewUrl={thumbnailPreview ?? undefined}
                      onDrop={(acceptedFiles) => {
                        const file = acceptedFiles[0];
                        if (file) {
                          const url = URL.createObjectURL(file);
                          setThumbnailPreview(url);
                          field.onChange(file);
                        }
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="productImages"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Gallery
                    <span className="text-muted-foreground text-xs">
                      (You can upload multiple images)
                    </span>
                  </FormLabel>
                  <FormControl>
                    <Dropzone
                      multiple={true}
                      onDrop={(files) => {
                        const urls = files.map((file) =>
                          URL.createObjectURL(file),
                        );
                        setGalleryPreviews(urls);
                        // Assuming you want to keep actual files in the form for submission
                        field.onChange(files);
                      }}
                      className="min-h-[200px] w-full"
                    />
                  </FormControl>

                  {/* Show previews */}
                  <div className="mt-2 flex flex-wrap gap-2">
                    {galleryPreviews.map((src, i) => (
                      <Image
                        key={i}
                        src={src}
                        width={100}
                        height={100}
                        alt={`Preview ${i + 1}`}
                        className="h-20 w-20 rounded-md border object-cover"
                      />
                    ))}
                  </div>

                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContainer>
        </div>

        <div className="pt-4">
          <Button disabled={isPending} type="submit" className="w-fit">
            Add Product
          </Button>
        </div>
      </form>
    </Form>
  );
};
