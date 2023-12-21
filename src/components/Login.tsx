"use client";
import React from "react";
import { Form } from "./ui/form";
import { useForm } from "react-hook-form";
import zod from "zod";
import { loginSchema } from "@/lib/validations/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInput from "./shared/TextInput";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import AlertBox from "./shared/AlertBox";

const Login = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const router = useRouter();
  const form = useForm<zod.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (data: zod.infer<typeof loginSchema>) => {
    setIsSubmitting(true);
    try {
      const signinData = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (!signinData?.error) {
        setIsSuccess(true);
        router.push("/dashboard");
        setIsSubmitting(false);
      } else {
        setIsError(true);
        setIsSubmitting(false);
      }
    } catch (error) {
      setIsError(true);
      setIsSubmitting(false);
      console.log(error);
    }
  };
  console.log(isError);
  return (
    <div className="w-full max-w-[400px] mx-auto">
      {isSuccess ? (
        <AlertBox
          type="success"
          description="You have successfully logged in! Redirecting..."
        />
      ) : isError ? (
        <AlertBox
          type="error"
          description="Invalid email or password. Please try again."
        />
      ) : null}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <TextInput
            form={form}
            name="email"
            label="Email"
            placeholder="Enter your email"
          />
          <TextInput
            form={form}
            name="password"
            label="Password"
            placeholder="Enter your password"
            type="password"
          />

          <div className="mt-10 flex items-center justify-start">
            <Button type="submit" className={cn("w-full", buttonVariants())}>
              {isSubmitting ? "Logging in..." : "Login"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Login;
