import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="bg-background flex h-screen items-center justify-center">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-4 p-12 text-center">
        <h1 className="text-6xl font-extrabold tracking-tight">
          Oops, page not found!
        </h1>
        <p className="text-muted-foreground text-xl">
          Sorry, the page you are looking for does not exist. If you think this
          is an error, please contact us.
        </p>
        <Button className="w-fit" size="lg" asChild>
          <Link href="/">
            <HomeIcon className="size-4" /> Go Home
          </Link>
        </Button>
      </div>
    </div>
  );
};
export default NotFound;
