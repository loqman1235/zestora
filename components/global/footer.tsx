import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const Footer = () => {
  return (
    <div className="bg-muted min-h-[500px]">
      <div className="mx-auto h-full max-w-7xl px-5 md:px-20">
        {/* NEWSLETTER */}
        <div className="bg-foreground text-background flex min-h-[180px] w-full flex-col items-center justify-between gap-10 rounded-xl px-10 py-5 md:flex-row">
          <h1 className="font-playfair w-fit text-center text-2xl font-black tracking-tight uppercase md:w-[70%] md:text-left md:text-4xl">
            Stay upto date about
            <br /> our latest offers
          </h1>

          <div className="flex w-full flex-col gap-2 md:w-[30%]">
            <Input
              className="bg-background rounded-full"
              placeholder="Enter your email address"
            />
            <Button variant="secondary" className="rounded-full">
              Subscribe to Newsletter
            </Button>
          </div>
        </div>

        {/* TODO: ADD FOOTER COLUMNS HERE */}
      </div>
    </div>
  );
};
