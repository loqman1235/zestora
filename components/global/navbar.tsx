import { mainNavigation } from "@/config/navigation";
import { Brand } from "./brand";
import Link from "next/link";
import { ShoppingCart, UserCircle } from "lucide-react";
import { SearchBar } from "./search-bar";
import { MobileNavigation } from "./mobile-navigation";

export const Navbar = () => {
  return (
    <header className="bg-background sticky top-0 z-50 h-16">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 md:px-10">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-5">
            <MobileNavigation />
            <Brand />
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-5">
              {mainNavigation.map(({ href, name }) => (
                <li key={href}>
                  <Link href={href}>{name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-10">
          <SearchBar />

          <div className="flex items-center gap-5">
            <Link href="/cart">
              <ShoppingCart />
            </Link>
            <Link href="/login">
              <UserCircle />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
