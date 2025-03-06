import type { Metadata } from "next";
import localFont from "next/font/local";
import { Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/global/navbar";
import { Footer } from "@/components/global/footer";
import { siteConfig } from "@/config/site";
import "./globals.css";

const satoshi = localFont({
  src: [
    {
      path: "./assets/fonts/satoshi/bold.ttf",
      weight: "700",
    },

    {
      path: "./assets/fonts/satoshi/regular.ttf",
      weight: "400",
    },
    {
      path: "./assets/fonts/satoshi/medium.ttf",
      weight: "500",
    },
    {
      path: "./assets/fonts/satoshi/light.ttf",
      weight: "300",
    },
  ],
  display: "swap",
  variable: "--font-satoshi",
});

const integralCF = localFont({
  src: [
    {
      path: "./assets/fonts/integral-cf/bold.otf",
      weight: "700",
    },

    {
      path: "./assets/fonts/integral-cf/regular.otf",
      weight: "400",
    },
  ],
  display: "swap",
  variable: "--font-integral",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
});

const cabinetGrotesk = localFont({
  src: [
    {
      path: "./assets/fonts/cabinet-grotesk/CabinetGrotesk-Variable.ttf",
      weight: "100 200 300 400 500 600 700 800 900",
    },
  ],
  display: "swap",
  variable: "--font-cabinet-grotesk",
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
        className={`${satoshi.variable} ${integralCF.variable} ${playfairDisplay.variable} ${cabinetGrotesk.variable} font-satoshi antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
