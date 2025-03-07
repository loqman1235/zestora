import { MinusIcon, PlusIcon, Trash2Icon } from "lucide-react";
import Image from "next/image";

export const CartItem = () => {
  return (
    <div className="border-b-border flex items-center gap-4 border-b py-5 first:pt-0 last:border-b-0 last:pb-0">
      {/* IMAGE */}
      <div className="bg-muted size-32 overflow-hidden rounded-lg">
        <Image
          src="/images/products/similar/1.png"
          className="h-full w-full object-cover"
          alt="product"
          width={100}
          height={100}
        />
      </div>
      {/* CONTENT */}
      <div className="flex min-h-[128px] flex-1 flex-col items-start">
        <div className="flex w-full items-start justify-between">
          <div>
            <h3 className="text-lg font-bold capitalize">Product name</h3>
            <p>
              Size: <span className="text-muted-foreground">Large</span>
            </p>
            <p>
              Color: <span className="text-muted-foreground">Black</span>
            </p>
          </div>
          <button
            className="bg-destructive/10 hover:bg-destructive/20 cursor-pointer rounded-full p-2 transition"
            aria-label="Delete"
          >
            <Trash2Icon className="text-destructive size-4" />
          </button>
        </div>
        <div className="mt-auto flex w-full items-center justify-between">
          <h3 className="text-xl font-bold tracking-tighter">$100</h3>
          <div className="bg-muted flex w-[120px] items-center justify-evenly gap-2 rounded-full p-1">
            <button className="cursor-pointer" aria-label="Minus item">
              <MinusIcon className="size-4" />
            </button>
            <span>1</span>
            <button className="cursor-pointer" aria-label="Plus item">
              <PlusIcon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
