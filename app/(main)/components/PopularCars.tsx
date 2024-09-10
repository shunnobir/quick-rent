"use client";

import Button from "@/components/button";
import CarCard from "@/components/CarCard";
import { CarType } from "@/types";
import React, { useEffect, useState } from "react";

const PopularCars = () => {
  const [loading, setLoading] = useState(false);
  const [cars, setCars] = useState<CarType[]>([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        if (loading) return;
        setLoading(true);
        const response = await fetch("/api/cars?filter=popular");
        const data: CarType[] = await response.json();
        setCars(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (loading) {
    return (
      <section className="flex flex-col gap-5">
        <div className="flex flex-row items-center justify-between">
          <span className="text-2xl font-semibold">Popular Cars</span>
          <Button variant="link" href="#">
            See all
          </Button>
        </div>
        <div className="grid h-[350px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex h-full w-full animate-pulse rounded-lg bg-slate-300" />
          <div className="flex h-full w-full animate-pulse rounded-lg bg-slate-300" />
          <div className="hidden h-full w-full animate-pulse rounded-lg bg-slate-300 md:flex" />
          <div className="hidden h-full w-full animate-pulse rounded-lg bg-slate-300 lg:flex" />
        </div>
      </section>
    );
  }

  return (
    <section className="flex flex-col gap-5">
      <div className="flex flex-row items-center justify-between">
        <span className="text-2xl font-semibold">Popular Cars</span>
        <Button variant="link" href="#">
          See all
        </Button>
      </div>
      <div className="grid min-h-[350px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cars.map((car) => {
          return <CarCard {...car} key={car.id} />;
        })}
      </div>
    </section>
  );
};

export default PopularCars;
