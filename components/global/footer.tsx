import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Brand } from "./brand";
import { FooterSocial } from "./footer-social";
import { Separator } from "../ui/separator";
import { siteConfig } from "@/config/site";
import { FooterCCLogos } from "./footer-cc-logos";

export const Footer = () => {
  return (
    <footer className="bg-muted mt-40">
      <div className="relative mx-auto h-full max-w-7xl px-5 md:px-20">
        {/* NEWSLETTER */}
        <div className="relative w-full">
          <div className="bg-foreground text-background absolute top-[-100px] left-1/2 flex min-h-[180px] w-full -translate-x-1/2 flex-col items-center justify-between gap-10 rounded-xl px-10 py-5 md:flex-row">
            <h1 className="font-playfair w-fit text-center text-2xl font-black tracking-wide uppercase md:w-[70%] md:text-left md:text-4xl">
              Stay upto date about
              <br /> our latest offers
            </h1>

            <div className="flex w-full flex-col gap-2 md:w-[30%]">
              <Input
                className="bg-background text-primary rounded-full"
                placeholder="Enter your email address"
              />
              <Button variant="secondary" className="rounded-full">
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>
        {/* TODO: ADD FOOTER COLUMNS HERE */}
        <div className="grid grid-cols-1 gap-10 pt-[140px] pb-5 md:grid-cols-6 md:pt-[100px]">
          <div className="flex flex-col gap-4 text-center md:col-span-2 md:items-start md:text-left">
            <Brand />
            <p className="text-muted-foreground text-sm">
              We have clothes that suits your style and which you&apos;re proud
              to wear. From casual to formal, we have it all.
            </p>
            <FooterSocial />
          </div>

          <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
            <h4 className="font-medium tracking-wider uppercase">Company</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link
                  className="text-muted-foreground hover:text-primary hover:underline"
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-muted-foreground hover:text-primary hover:underline"
                  href="/about"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  className="text-muted-foreground hover:text-primary hover:underline"
                  href="/about"
                >
                  Works
                </Link>
              </li>
              <li>
                <Link
                  className="text-muted-foreground hover:text-primary hover:underline"
                  href="/about"
                >
                  Career
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
            <h4 className="font-medium tracking-wider uppercase">Help</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link
                  className="text-muted-foreground hover:text-primary hover:underline"
                  href="/about"
                >
                  Customer Support
                </Link>
              </li>
              <li>
                <Link
                  className="text-muted-foreground hover:text-primary hover:underline"
                  href="/about"
                >
                  Delivery Details
                </Link>
              </li>
              <li>
                <Link
                  className="text-muted-foreground hover:text-primary hover:underline"
                  href="/about"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  className="text-muted-foreground hover:text-primary hover:underline"
                  href="/about"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
            <h4 className="font-medium tracking-wider uppercase">FAQ</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link
                  className="text-muted-foreground hover:text-primary hover:underline"
                  href="/about"
                >
                  Account
                </Link>
              </li>
              <li>
                <Link
                  className="text-muted-foreground hover:text-primary hover:underline"
                  href="/about"
                >
                  Manage Deliveries
                </Link>
              </li>
              <li>
                <Link
                  className="text-muted-foreground hover:text-primary hover:underline"
                  href="/about"
                >
                  Orders
                </Link>
              </li>
              <li>
                <Link
                  className="text-muted-foreground hover:text-primary hover:underline"
                  href="/about"
                >
                  Payments
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
            <h4 className="font-medium tracking-wider uppercase">Resources</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link
                  className="text-muted-foreground hover:text-primary hover:underline"
                  href="/about"
                >
                  Free Delivery
                </Link>
              </li>
              <li>
                <Link
                  className="text-muted-foreground hover:text-primary hover:underline"
                  href="/about"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="text-muted-foreground hover:text-primary hover:underline"
                  href="/about"
                >
                  Developer API
                </Link>
              </li>
              <li>
                <Link
                  className="text-muted-foreground hover:text-primary hover:underline"
                  href="/about"
                >
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator />
        <div className="flex flex-col items-center justify-between gap-5 py-5 md:flex-row">
          <p className="text-muted-foreground text-sm">
            {siteConfig.name} &copy; {new Date().getFullYear()}. All rights
            reserved
          </p>

          <FooterCCLogos />
        </div>
      </div>
    </footer>
  );
};
