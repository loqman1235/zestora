import { Footer } from "@/components/global/footer";
import { Navbar } from "@/components/global/navbar";
import Providers from "@/providers/providers";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Providers>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </Providers>
    </main>
  );
};
export default HomeLayout;
