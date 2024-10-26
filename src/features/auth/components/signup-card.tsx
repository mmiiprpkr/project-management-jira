"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useRegisterMutation } from "@/features/auth/api/use-register";
import { 
  signUpSchema, 
  SignUpSchema 
} from "@/features/auth/validation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { AuthLayout } from "./auth-layout";

export const SignUpCard = () => {
  const { mutate, isPending } = useRegisterMutation();

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
    mutate(data);
  };

  const onSocialLogin = (provider: "google" | "github") => {
    console.log(provider);
  };

  return (
    <AuthLayout
      title="Create your account"
      onSocialLogin={onSocialLogin}
      description
      footerText="Already have an account?"
      footerLink="/sign-in"
      footerLinkText="Login"
      disabled={isPending}
    >
      <form
        className="space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          {...register("name")}
          type="text"
          placeholder="Enter your name"
          disabled={isSubmitting || isPending}
          error={errors.name?.message}
        />
        <Input
          {...register("email")}
          type="email"
          placeholder="Enter your email"
          disabled={isSubmitting || isPending}
          error={errors.email?.message}
        />
        <Input
          {...register("password")}
          type="password"
          placeholder="Enter your password"
          min={8}
          max={256}
          disabled={isSubmitting || isPending}
          error={errors.password?.message}
        />
        <Button
          disabled={isSubmitting || isPending}
          size="lg"
          className="w-full"
        >
          Sign Up
        </Button>
      </form>
    </AuthLayout>
  );
};
