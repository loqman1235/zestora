import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { Navbar } from "@/components/global/navbar";
import { siteConfig } from "@/config/site";

const satoshi = localFont({
  src: [
    {
      path: "../assets/fonts/satoshi/bold.ttf",
      weight: "700",
    },

    {
      path: "../assets/fonts/satoshi/regular.ttf",
      weight: "400",
    },
    {
      path: "../assets/fonts/satoshi/medium.ttf",
      weight: "500",
    },
    {
      path: "../assets/fonts/satoshi/light.ttf",
      weight: "300",
    },
  ],
  display: "swap",
  variable: "--font-satoshi",
});

const integralCF = localFont({
  src: [
    {
      path: "../assets/fonts/integral-cf/bold.otf",
      weight: "700",
    },

    {
      path: "../assets/fonts/integral-cf/regular.otf",
      weight: "400",
    },
  ],
  display: "swap",
  variable: "--font-integral",
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${satoshi.variable} ${integralCF.variable} font-satoshi antialiased`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
