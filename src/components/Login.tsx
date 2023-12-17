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

const Login = () => {
  const form = useForm<zod.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data: zod.infer<typeof loginSchema>) => {
    console.log(data);
  };
  return (
    <div className="w-full max-w-[400px] mx-auto">
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
            <Button className={cn("w-full", buttonVariants())}>Login</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Login;
