"use client";

import Button from "@/components/button";
import CarCard from "@/components/CarCard";
import Skeleton from "@/components/skeleton";
import { useCars } from "@/hooks/useCars";
import { CarType } from "@/types";
import React from "react";

const Recommended = () => {
  const { data, fetching: loading } = useCars("recommended");
  const cars = data ? (data as CarType[]) : undefined;

  return (
    <section className="flex h-fit flex-col gap-5">
      <div className="flex flex-row items-center justify-between">
        <span className="text-xl font-semibold sm:text-2xl">
          Recommended Cars
        </span>
        <Button variant="link" href="/cars">
          See all
        </Button>
      </div>
      {loading ? (
        <div className="grid min-h-[350px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Skeleton className="flex h-full min-h-[350px] w-full bg-slate-300" />
          <Skeleton className="flex h-full min-h-[350px] w-full bg-slate-300" />
          <Skeleton className="hidden h-full min-h-[350px] w-full bg-slate-300 lg:flex" />
          <Skeleton className="hidden h-full min-h-[350px] w-full bg-slate-300 xl:flex" />
        </div>
      ) : cars && cars.length > 0 ? (
        <div className="grid min-h-[350px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cars.map((car) => {
            return <CarCard {...car} key={car.id} />;
          })}
        </div>
      ) : (
        <div className="flex min-h-[350px] flex-1 items-center justify-center">
          <span className="uppercase text-slate-500">No Cars Found</span>
        </div>
      )}
    </section>
  );
};

export default Recommended;
