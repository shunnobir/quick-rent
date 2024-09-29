"use client";

import { useCategories } from "@/hooks/useCategories";
import { CategoryType } from "@/types";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Skeleton from "./skeleton";
import Checkbox from "./checkbox";
import { Settings2, X } from "lucide-react";
import Button from "./button";
import { cn } from "@/lib/utils";
import { useFilters } from "@/hooks/useFilters";

const Sidebar = () => {
  const { data, fetching: loading } = useCategories();
  const categories = useMemo(
    () => (data ? (data as CategoryType[]) : undefined),
    [data],
  );
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const {
    filters,
    handleTypeFilter,
    handleRemoveTypeFilter,
    handleCapacityFilter,
    handleRemoveCapacityFilter,
    handlePriceFilter,
    handleRemovePriceFilter,
  } = useFilters();

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const filterBtn = document.getElementById("filter");
      if (
        ref &&
        ref?.current &&
        !ref.current.contains(e.target as Node) &&
        !filterBtn?.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <>
      <div className="flex flex-col gap-8 px-5 py-4 sm:pl-10 lg:hidden lg:pb-20">
        <Button
          variant="outline"
          className="flex w-fit flex-row items-center justify-start gap-2"
          onClick={() => setOpen(true)}
          id="filter"
        >
          <Settings2 size={20} />
          <span>Filters</span>
        </Button>
      </div>
      <div
        className={cn(
          "relative ml-10 hidden py-5 lg:flex lg:flex-col lg:gap-8 lg:pb-20 xl:ml-0",
          open &&
            "absolute z-10 ml-0 grid w-full grid-cols-2 bg-background shadow-md",
        )}
        ref={ref}
      >
        <Button
          variant="outline"
          className={cn(
            "absolute right-5 top-4 h-9 w-9 p-2",
            open && "flex",
            !open && "hidden",
          )}
          onClick={() => setOpen(false)}
        >
          <X size={20} />
        </Button>
        {loading ? (
          <SidebarFallback />
        ) : categories ? (
          categories.map((category) => (
            <div
              key={category.id}
              className={cn(
                "flex flex-col gap-4 rounded-lg bg-background px-6 py-8",
                open && category.type !== "options" && "col-span-2",
              )}
            >
              <span className="text-xs uppercase tracking-widest text-slate-400">
                {category.name}
              </span>
              <div className="flex flex-col gap-3">
                {category.type === "options"
                  ? category.categories.map((categ) => (
                      <Checkbox
                        key={categ.toString()}
                        label={categ.toString()}
                        value={
                          category.name.toLowerCase() === "type"
                            ? filters.type.includes(categ.toString())
                            : filters.capacity.includes(
                                categ.toString().split(" ")[0],
                              )
                        }
                        onChangeValue={(checked) =>
                          category.name.toLowerCase() === "type"
                            ? checked
                              ? handleTypeFilter(categ.toString())
                              : handleRemoveTypeFilter(categ.toString())
                            : checked
                              ? handleCapacityFilter(categ.toString())
                              : handleRemoveCapacityFilter(categ.toString())
                        }
                      />
                    ))
                  : category.categories.map((categ, index, array) =>
                      index + 2 <= category.categories.length ? (
                        <Checkbox
                          key={categ.toString()}
                          label={`$${categ} - $${array[index + 1]}`}
                          value={
                            filters.price.find((price) => {
                              const [lower, upper] = price.split("-");
                              return (
                                lower === categ.toString() &&
                                upper === array[index + 1].toString()
                              );
                            }) !== undefined
                          }
                          onChangeValue={(checked) =>
                            checked
                              ? handlePriceFilter(
                                  Number.parseInt(categ.toString()),
                                  Number.parseInt(array[index + 1].toString()),
                                )
                              : handleRemovePriceFilter(
                                  Number.parseInt(categ.toString()),
                                  Number.parseInt(array[index + 1].toString()),
                                )
                          }
                        />
                      ) : null,
                    )}
              </div>
            </div>
          ))
        ) : null}
      </div>
    </>
  );
};

export const SidebarFallback = () => {
  return (
    <>
      <div className="flex flex-col gap-4 rounded-lg bg-background px-6 py-8">
        <span className="text-xs uppercase text-slate-400">TYPE</span>
        <div className="flex flex-col gap-2.5">
          {[1, 2, 3, 4, 5].map((val) => (
            <div className="flex flex-row gap-2" key={val}>
              <Skeleton className="h-6 w-6 rounded-md" />
              <Skeleton className="h-6 w-60 rounded-md" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 rounded-lg bg-background px-6 py-8">
        <span className="text-xs uppercase text-slate-400">Capacity</span>
        <div className="flex flex-col gap-2.5">
          {[1, 2, 3, 4, 6].map((val) => (
            <div className="flex flex-row gap-2" key={val}>
              <Skeleton className="h-6 w-6 rounded-md" />
              <Skeleton className="h-6 w-60 rounded-md" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 rounded-lg bg-background px-6 py-8">
        <span className="text-xs uppercase text-slate-400">Price</span>
        <div className="flex flex-col gap-2.5">
          {[1, 2, 3, 4, 6].map((val) => (
            <div className="flex flex-row gap-2" key={val}>
              <Skeleton className="h-6 w-6 rounded-md" />
              <Skeleton className="h-6 w-60 rounded-md" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
