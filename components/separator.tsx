import { cn } from "@/lib/utils";
import React from "react";

export interface SeparatorProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: "horizontal" | "vertical";
}

const Separator = ({
  orientation = "horizontal",
  className,
  ...props
}: SeparatorProps) => {
  return (
    <hr
      className={cn(
        "srink-0 bg-slate-200",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className,
      )}
      {...props}
    />
  );
};

export default Separator;
