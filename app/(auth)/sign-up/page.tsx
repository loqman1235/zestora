import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SignUpForm } from "../_components/sign-up-form";

const SignUpPage = () => {
  return (
    <Card className="min-w-[400px]">
      <CardHeader>
        <CardTitle className="font-playfair text-xl font-bold">
          Sign Up
        </CardTitle>
        <CardDescription>Create an account</CardDescription>
      </CardHeader>
      <CardContent>
        <SignUpForm />
      </CardContent>
    </Card>
  );
};
export default SignUpPage;
