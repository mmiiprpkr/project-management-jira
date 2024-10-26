"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { AuthLayout } from "./auth-layout";

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1).max(256),
});

type SignInSchema = z.infer<typeof signInSchema>;

export const SignInCard = () => {
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
    console.log(data);
  };

  return (
    <AuthLayout
      title="Login to your account"
      onSocialLogin={() => {}}
      footerText="Don't have an account?"
      footerLink="/sign-up"
      footerLinkText="Sign Up"
    >
      <form 
        className="space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          type="email"
          placeholder="Enter your email"
          {...register("email")}
          disabled={isSubmitting}
          error={errors.email?.message}
        />
        <Input 
          type="password"
          placeholder="Enter your password"
          {...register("password")}
          disabled={isSubmitting}
          error={errors.password?.message}
        />
        <Button
          disabled={isSubmitting}
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
