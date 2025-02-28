import { SearchIcon } from "lucide-react";
import { Input } from "../ui/input";

export const SearchBar = () => {
  return (
    <form className="hidden md:block">
      <div className="relative min-w-[400px]">
        <Input
          className="rounded-full pl-10"
          placeholder="Search products..."
        />
        <button
          type="submit"
          className="absolute top-1/2 left-3 -translate-y-1/2 cursor-pointer"
        >
          <SearchIcon className="text-muted-foreground size-4" />
        </button>
      </div>
    </form>
  );
};
