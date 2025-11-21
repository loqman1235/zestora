import { auth } from "@/auth";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Account",
};

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  if (session && session.user) return redirect("/");

  return (
    <div className="mt-10 flex flex-col items-center justify-center">
      {children}
    </div>
  );
};
export default AuthLayout;
