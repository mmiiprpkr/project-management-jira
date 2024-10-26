"use client";

import Link from "next/link";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { DottedSeparator } from "@/components/dotted-separator";

type AuthLayoutProps = {
  children: React.ReactNode;
  title: string;
  description?: boolean;
  onSocialLogin: (provider: "google" | "github") => void;
  disabled?: boolean;
  footerText?: string;
  footerLink?: string;
  footerLinkText?: string;
};

export const AuthLayout = ({ 
  children,
  title,
  description,
  onSocialLogin,
  disabled,
  footerText,
  footerLink,
  footerLinkText,
}: AuthLayoutProps) => {
  return (
    <Card className="md:max-w-[478px] border-none shadow-none w-full">
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="text-2xl">
          {title}
        </CardTitle>
        {description && (
          <CardDescription>
            By Signing up, you agree to our{" "}
            <Link href="/terms">
              <span className="text-blue-700">Privacy Policy</span>
            </Link>{" "}
            and{" "}
            <Link href="/terms">
              <span className="text-blue-700">Terms of Service</span>
            </Link>
          </CardDescription>
        )}
      </CardHeader>
      <div className="px-7 mb-2">
        <DottedSeparator />
      </div>
      <CardContent className="p-7">
        {children}
      </CardContent>
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="p-7 flex flex-col gap-y-4">
        <Button
          onClick={() => onSocialLogin("google")}
          disabled={disabled}
          variant="outline"
          size="lg"
          className="w-full"
        >
          <FcGoogle className="mr-2 size-5" />
          Login with Google
        </Button>
        <Button
          onClick={() => onSocialLogin("github")}
          disabled={disabled}
          variant="outline"
          size="lg"
          className="w-full"
        >
          <FaGithub className="mr-2 size-5" />
          Login with GitHub
        </Button>
      </CardContent>
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="p-7 flex items-center justify-center">
        <p>
          {footerText} {" "}
          <Link 
            className="text-blue-700"
            href={footerLink ?? ""}
          >
            {footerLinkText}
          </Link>
        </p>
      </CardContent>
    </Card>
  );
};
