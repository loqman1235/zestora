import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SignInForm } from "../_components/sign-in-form";

const SignInPage = () => {
  return (
    <Card className="min-w-[400px]">
      <CardHeader>
        <CardTitle className="font-playfair text-xl font-bold">
          Sign In
        </CardTitle>
        <CardDescription>Sign in to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="bg-muted mb-5 rounded-md p-3">
          <p className="text-muted-foreground text-sm">
            To sign in as an admin, use the following credentials:
            <br />
            <span className="font-medium">admin@test.com</span> /{" "}
            <span className="font-medium">admin123</span>
          </p>
        </div>
        <SignInForm />
      </CardContent>
    </Card>
  );
};

export default SignInPage;
