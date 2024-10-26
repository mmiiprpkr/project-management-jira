"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useLoginMutation } from "@/features/auth/api/use-login";

import { 
  signInSchema, 
  SignInSchema 
} from "@/features/auth/validation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { AuthLayout } from "./auth-layout";

export const SignInCard = () => {
  const { mutate, isPending } = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: SignInSchema) => {
    mutate(data);
  };

  return (
    <AuthLayout
      title="Login to your account"
      onSocialLogin={() => {}}
      footerText="Don't have an account?"
      footerLink="/sign-up"
      footerLinkText="Sign Up"
      disabled={isPending}
    >
      <form 
        className="space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          type="email"
          placeholder="Enter your email"
          {...register("email")}
          disabled={isSubmitting || isPending}
          error={errors.email?.message}
        />
        <Input 
          type="password"
          placeholder="Enter your password"
          {...register("password")}
          disabled={isSubmitting || isPending}
          error={errors.password?.message}
        />
        <Button
          disabled={isSubmitting || isPending}
          size="lg"
          className="w-full"
          type="submit"
        >
          Login
        </Button>
      </form>
    </AuthLayout>
  );
};
