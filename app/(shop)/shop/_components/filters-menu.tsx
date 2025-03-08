// import { Checkbox } from "@/components/ui/checkbox";
// import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { SlidersVerticalIcon } from "lucide-react";

export const FiltersMenu = () => {
  return (
    <aside className="border-border hidden w-1/4 rounded-lg border p-5 md:block">
      <div className="flex items-center justify-between">
        <h4 className="text-xl font-bold">Filters</h4>
        <SlidersVerticalIcon className="text-muted-foreground size-5" />
      </div>
      <Separator className="my-5" />

      {/* <div className="flex flex-col gap-5">
        <div className="items-top flex space-x-2">
          <Checkbox id="shirts" />
          <div className="grid gap-1.5 leading-none">
            <Label htmlFor="shirts">Shirts</Label>
          </div>
        </div>
        <div className="items-top flex space-x-2">
          <Checkbox id="shorts" />
          <div className="grid gap-1.5 leading-none">
            <Label htmlFor="shorts">Shorts</Label>
          </div>
        </div>
      </div> */}
    </aside>
  );
};
