import { mainNavigation } from "@/config/navigation";
import { Brand } from "./brand";
import Link from "next/link";
import { ShoppingCart, UserCircle } from "lucide-react";
import { SearchBar } from "./search-bar";
import { MobileNavigation } from "./mobile-navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { auth } from "@/auth";
import { LogoutBtn } from "./logout-btn";

export const Navbar = async () => {
  const session = await auth();
  return (
    <header className="bg-background/80 sticky top-0 z-50 h-16 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 md:px-20">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-5">
            <MobileNavigation />
            <Brand />
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-5">
              {mainNavigation.map(({ href, name }) => (
                <li key={href}>
                  <Link href={href} className="hover:underline">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-10">
          <SearchBar />

          <div className="flex items-center gap-5">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  {" "}
                  <Link href="/cart">
                    <ShoppingCart />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Cart</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  {session?.user ? (
                    <LogoutBtn />
                  ) : (
                    <Link href="/sign-in">
                      <UserCircle />
                    </Link>
                  )}
                </TooltipTrigger>
                <TooltipContent>
                  <p>{session?.user ? "Logout" : "Account"}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </header>
  );
};
