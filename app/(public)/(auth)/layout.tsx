import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account",
};

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-10 flex flex-col items-center justify-center">
      {children}
    </div>
  );
};
export default AuthLayout;
