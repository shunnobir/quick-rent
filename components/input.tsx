import { cn } from "@/lib/utils";
import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string | React.JSX.Element;
  containerClassName?: string;
  LeftIcon?: (props: {
    size?: number;
    className?: string;
    strokeWidth?: number;
  }) => React.JSX.Element;
}

const Input = ({
  label,
  className,
  containerClassName,
  LeftIcon,
  ...props
}: InputProps) => {
  return (
    <label
      className={cn(
        "flex flex-col gap-1.5",
        LeftIcon && "relative",
        containerClassName,
      )}
    >
      {label}
      <input
        className={cn(
          "min-h-10 flex-1 rounded-lg border border-solid border-slate-200 px-5 py-2 text-sm ring-offset-background transition-colors placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-1 focus-visible:ring-offset-background",
          LeftIcon && "pl-10",
          className,
        )}
        {...props}
      />
      {LeftIcon ? (
        <LeftIcon
          size={24}
          strokeWidth={1.5}
          className={cn(
            "absolute left-2.5 text-slate-500 peer-aria-hidden:hidden",
            label && "top-7",
            !label && "top-2",
          )}
        />
      ) : null}
    </label>
  );
};

export default Input;
