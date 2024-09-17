"use client";

import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import React, { useState } from "react";

export type CheckboxProps = {
  onChangeValue?: (checked: boolean) => void;
  value?: boolean;
  size?: number;
  label?: string;
};

const Checkbox = ({
  onChangeValue,
  value,
  size = 20,
  label,
}: CheckboxProps) => {
  const [checked, setChecked] = useState(value || false);
  return (
    <div className="flex flex-row items-start gap-4">
      <button
        className={cn(
          "flex flex-shrink-0 items-center justify-center rounded-md border border-solid border-slate-300 bg-transparent p-0.5 transition-all duration-300",
          checked && "border-indigo-600 bg-indigo-600",
        )}
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
        onClick={() => {
          if (onChangeValue) {
            onChangeValue(!checked);
          }
          setChecked((prev) => !prev);
        }}
        role="checkbox"
        aria-checked={checked}
      >
        <Check
          className={cn(
            "invisible h-full w-full text-transparent transition-all duration-300",
            checked && "visible text-white",
          )}
        />
      </button>
      {label ? (
        <label className="hyphens-auto text-slate-700">{label}</label>
      ) : null}
    </div>
  );
};

export default Checkbox;
