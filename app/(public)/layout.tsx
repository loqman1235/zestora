import Providers from "@/providers/providers";
import { Navbar } from "@/components/global/navbar";
import { Footer } from "@/components/global/footer";
import "../globals.css";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="font-satoshi">
      <Providers>
        <Navbar />
        {children}
        <Footer />
      </Providers>
    </div>
  );
}
