"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout = ({ 
  children,
}: AuthLayoutProps) => {
  const pathname = usePathname();

  return (
    <main className="bg-neutral-100 h-screen overflow-hidden">
      <div className="mx-auto max-w-screen-2xl p-4 h-full flex flex-col gap-2">
        <nav className="flex justify-between items-center">
          <Image
            src="/logo.svg"
            height={50}
            width={100}
            alt="logo"
          />
          <Button 
            variant="secondary"
            asChild
          >
            <Link 
              href={pathname === "/sign-in" 
                ? "/sign-up" 
                : "/sign-in"
              }
            >
              {pathname === "/sign-in" ? "Sign Up" : "Login"}
            </Link>
          </Button>
        </nav>
        <div className="flex flex-col md:justify-center items-center h-full overflow-y-auto">
          {children}
        </div>
        <footer className="flex justify-center items-center border-t border-neutral-200 pt-4">
          <p className="text-sm text-neutral-500">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
};

export default AuthLayout;