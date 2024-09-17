"use client";

import { cn } from "@/lib/utils";
import React, { useRef } from "react";

export interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  tooltipContent: React.ReactNode;
}

const Tooltip = ({
  children,
  className,
  tooltipContent,
  ...props
}: TooltipProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleHover = () => {
    const tooltips = ref?.current?.querySelectorAll("[role=tooltip]");
    if (tooltips) {
      const activeTooltip = Array.from(tooltips).filter((tooltip) =>
        tooltip.classList.contains("group-hover/tooltip:inline-flex"),
      );
      const inactiveTooltip = Array.from(tooltips).filter(
        (tooltip) => tooltip !== activeTooltip[0],
      );
      const rect = activeTooltip[0].getBoundingClientRect();
      if (
        activeTooltip[0].getAttribute("data-position") === "bottom" &&
        rect.height + rect.y > window.innerHeight
      ) {
        activeTooltip[0].classList.remove("group-hover/tooltip:inline-flex");
        inactiveTooltip[0].classList.add("group-hover/tooltip:inline-flex");
      } else if (
        activeTooltip[0].getAttribute("data-position") === "top" &&
        rect.y < 0
      ) {
        activeTooltip[0].classList.remove("group-hover/tooltip:inline-flex");
        inactiveTooltip[0].classList.add("group-hover/tooltip:inline-flex");
      }
    }
  };

  return (
    <div
      ref={ref}
      className={cn("group/tooltip relative grid", className)}
      {...props}
      onMouseOver={() => handleHover()}
    >
      {children}
      <div
        role="tooltip"
        data-position="bottom"
        className="absolute top-[150%] z-20 hidden w-52 flex-col items-center self-center justify-self-center rounded-lg border border-solid border-slate-200 bg-slate-100 px-4 py-2 text-center text-sm shadow-md after:absolute after:-top-2.5 after:left-1/2 after:z-10 after:h-5 after:w-5 after:rotate-45 after:rounded-tl-md after:border after:border-solid after:border-transparent after:border-l-slate-200 after:border-t-slate-200 after:bg-slate-100 after:content-[''] group-hover/tooltip:inline-flex"
      >
        {tooltipContent}
      </div>
      <div
        role="tooltip"
        data-position="top"
        className="absolute bottom-[150%] z-20 hidden w-52 flex-col items-center self-center justify-self-center rounded-lg border border-solid border-slate-200 bg-slate-100 px-4 py-2 text-center text-sm shadow-md after:absolute after:-bottom-2.5 after:left-1/2 after:z-10 after:h-5 after:w-5 after:rotate-45 after:rounded-br-md after:border after:border-solid after:border-transparent after:border-b-slate-200 after:border-r-slate-200 after:bg-slate-100 after:content-['']"
      >
        {tooltipContent}
      </div>
    </div>
  );
};

export default Tooltip;
