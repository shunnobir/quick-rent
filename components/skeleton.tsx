import { cn } from "@/lib/utils";
import React from "react";

const Skeleton = ({ className }: { className: string }) => {
  return (
    <div
      className={cn(
        "h-20 w-72 animate-pulse rounded-lg bg-slate-300",
        className,
      )}
    />
  );
};

export default Skeleton;
