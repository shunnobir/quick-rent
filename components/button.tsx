import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Link from "next/link";

const button = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors ring-offset-background focus-visible:outline-none focus-visible:ring-indigo-600 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-40 px-4 py-2",
  {
    variants: {
      variant: {
        primary:
          "bg-indigo-600 text-white hover:bg-indigo-600/90 active:bg-indigo-700",
        icon: "p-1 rounded-full text-slate-400 hover:text-indigo-600 active:text-indigo-700",
        link: "font-medium p-0 text-indigo-600 hover:text-indigo-600/900 active:text-indigo-700 ",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  href?: string;
}

const Button = ({
  className,
  variant,
  children,
  href,
  ...props
}: ButtonProps) => {
  return href ? (
    <Link href={href} className={cn(button({ variant, className }))}>
      {children}
    </Link>
  ) : (
    <button className={cn(button({ variant, className }))} {...props}>
      {children}
    </button>
  );
};

export default Button;
