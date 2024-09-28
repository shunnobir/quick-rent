"use client";

import CarCard from "@/components/CarCard";
import Sidebar, { SidebarFallback } from "@/components/Sidebar";
import Skeleton from "@/components/skeleton";
import { useCars } from "@/hooks/useCars";
import { useFilters } from "@/hooks/useFilters";
import { CarType } from "@/types";
import React, { Suspense, useMemo, useState } from "react";

const Page = () => {
  const { data, fetching: loading } = useCars();
  const { filters } = useFilters();
  const [isFiltered, setIsFiltered] = useState(false);
  const cars = useMemo(() => {
    if (!data) return [];

    let filteredCars: CarType[] = [...(data as CarType[])];
    if (filters.type.length > 0) {
      setIsFiltered(true);
      filteredCars = filteredCars.filter((car) =>
        filters.type.includes(car["car-type"]),
      );
    } else {
      setIsFiltered(false);
    }

    if (filters.capacity.length > 0) {
      setIsFiltered(true);
      filteredCars = filteredCars.filter((car) =>
        filters.capacity.includes(
          car["seating-capacity"].toString().split(" ")[0],
        ),
      );
    } else {
      setIsFiltered(false);
    }

    if (filters.price.length > 0) {
      setIsFiltered(true);
      filteredCars = filteredCars.filter((car) => {
        return filters.price.find((price) => {
          const [lower, upper] = price.split("-");
          return (
            Number.parseInt(lower) <= car["rent-price-per-day"] &&
            Number.parseInt(upper) >= car["rent-price-per-day"]
          );
        });
      });
    } else {
      setIsFiltered(false);
    }

    if (filters.search.length > 0) {
      setIsFiltered(true);
      filteredCars = filteredCars.filter(
        (car) =>
          car.name.toLowerCase().search(filters.search.toLowerCase()) !== -1 ||
          car["car-type"].toLowerCase().search(filters.search.toLowerCase()) !==
            -1,
      );
    } else {
      setIsFiltered(false);
    }

    return filteredCars;
  }, [data, filters]);

  return (
    <div className="mx-auto grid max-w-[1220px] grid-cols-1 lg:grid-cols-[280px_1fr]">
      <Suspense fallback={<SidebarFallback />}>
        <Sidebar />
      </Suspense>
      <main className="grid flex-1 px-5 py-4 pb-[100px] sm:px-10 xl:pr-0">
        <Suspense fallback={<PageFallback />}>
          {loading ? (
            <PageFallback />
          ) : cars && cars.length > 0 ? (
            <div className="grid auto-rows-max grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {isFiltered ? (
                <span className="col-span-1 text-sm text-slate-500 sm:col-span-2 xl:col-span-3">
                  Found {cars.length} matching results
                </span>
              ) : null}
              {cars.map((car) => {
                return <CarCard {...car} key={car.id} />;
              })}
            </div>
          ) : (
            <div className="flex min-h-[350px] flex-1 items-center justify-center">
              <span className="uppercase text-slate-500">No Cars Found</span>
            </div>
          )}
        </Suspense>
      </main>
    </div>
  );
};

const PageFallback = () => {
  return (
    <div className="grid auto-rows-max grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      <Skeleton className="flex h-[350px] w-full bg-slate-300" />
      <Skeleton className="flex h-[350px] w-full bg-slate-300" />
      <Skeleton className="h-[350px] w-full bg-slate-300" />
      <Skeleton className="h-[350px] w-full bg-slate-300" />
    </div>
  );
};

export default Page;
