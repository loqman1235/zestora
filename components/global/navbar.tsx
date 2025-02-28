import { Brand } from "./brand";

export const Navbar = () => {
  return (
    <header className="bg-background sticky top-0 z-50 h-16">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Brand />
      </div>
    </header>
  );
};
