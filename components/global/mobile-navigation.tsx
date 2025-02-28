import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Brand } from "./brand";
import { mainNavigation } from "@/config/navigation";
import Link from "next/link";

export const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="cursor-pointer md:hidden">
          <MenuIcon />
        </button>
      </SheetTrigger>
      <SheetContent side="left" title="Navigation">
        <SheetHeader>
          <SheetTitle>
            <Brand />
          </SheetTitle>

          <SheetClose />
        </SheetHeader>

        <div className="flex flex-col gap-4 p-4">
          {mainNavigation.map((item) => (
            <SheetClose asChild key={item.href}>
              <Link href={item.href}>{item.name}</Link>
            </SheetClose>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};
