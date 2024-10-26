"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { AuthLayout } from "./auth-layout";

const signUpSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(8).max(256),
});

type SignUpSchema = z.infer<typeof signUpSchema>;

export const SignUpCard = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: SignUpSchema) => {
    console.log(data);
  };

  const onSocialLogin = (provider: "google" | "github") => {
    console.log(provider);
  };

  return (
    <AuthLayout
      title="Create your account"
      onSocialLogin={onSocialLogin}
      footerText="Already have an account?"
      footerLink="/sign-in"
      footerLinkText="Login"
    >
      <form
        className="space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          {...register("name")}
          type="text"
          placeholder="Enter your name"
          disabled={isSubmitting}
          error={errors.name?.message}
        />
        <Input
          {...register("email")}
          type="email"
          placeholder="Enter your email"
          disabled={isSubmitting}
          error={errors.email?.message}
        />
        <Input
          {...register("password")}
          type="password"
          placeholder="Enter your password"
          min={8}
          max={256}
          disabled={isSubmitting}
          error={errors.password?.message}
        />
        <Button
          disabled={isSubmitting}
          size="lg"
          className="w-full"
        >
          Sign Up
        </Button>
      </form>
    </AuthLayout>
  );
};
