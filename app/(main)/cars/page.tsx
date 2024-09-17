"use client";

import CarCard from "@/components/CarCard";
import Sidebar from "@/components/Sidebar";
import Skeleton from "@/components/skeleton";
import { useCars } from "@/hooks/useCars";
import { CarType } from "@/types";
import React, { useMemo } from "react";

const Page = () => {
  const { data, fetching: loading } = useCars();
  const cars = useMemo(() => (data ? (data as CarType[]) : undefined), [data]);

  return (
    <div className="mx-auto grid max-w-[1220px] grid-cols-1 lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <main className="grid flex-1 px-5 py-4 pb-[100px] sm:px-10 xl:pr-0">
        {loading ? (
          <div className="grid min-h-[350px] grid-cols-1 gap-4 sm:grid-cols-2 lg:h-[350px] lg:grid-cols-2 xl:grid-cols-3">
            <Skeleton className="flex h-[350px] w-full bg-slate-300" />
            <Skeleton className="flex h-[350px] w-full bg-slate-300" />
            <Skeleton className="h-[350px] w-full bg-slate-300" />
            <Skeleton className="h-[350px] w-full bg-slate-300" />
          </div>
        ) : cars && cars.length > 0 ? (
          <div className="grid min-h-[350px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {cars.map((car) => {
              return <CarCard {...car} key={car.id} />;
            })}
          </div>
        ) : (
          <div className="flex min-h-[350px] flex-1 items-center justify-center">
            <span className="uppercase text-slate-500">No Cars Found</span>
          </div>
        )}
      </main>
    </div>
  );
};

export default Page;
