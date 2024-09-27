"use client";

import { useCar } from "@/hooks/useCar";
import { CarType } from "@/types";
import Image from "next/image";
import { notFound, useRouter } from "next/navigation";
import React, { useState } from "react";
import Loading from "./loading";
import Button from "@/components/button";
import { Fuel, Heart, UsersRound, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import Tooltip from "@/components/tooltip";
import ReviewCard from "@/components/ReviewCard";
import PopularCars from "@/components/PopularCars";
import useFavorite from "@/hooks/useFavorite";

const Page = ({ params: { id } }: { params: { id: string } }) => {
  const router = useRouter();

  const { data, fetching: loading } = useCar(id);
  const car: CarType | undefined = data ? (data as CarType[])[0] : undefined;
  const [day, setDay] = useState(1);
  const { favorite, handleFavorite } = useFavorite(id);

  if (!car && !loading) {
    notFound();
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <main className="mx-auto grid max-w-[1220px] grid-cols-1 gap-6 px-5 py-4 pb-[100px] sm:grid-cols-2 sm:px-10 xl:px-0">
      <div className="flex h-[350px] flex-col gap-2 lg:h-[500px]">
        <Image
          src={car!.images[0].url}
          width={300}
          height={150}
          alt={car!.name}
          priority
          className="h-full w-auto select-none rounded-lg bg-background object-contain p-5"
        />
        <Button variant="icon" className="h-fit w-fit">
          <Image
            src={car!.images[0].url}
            width={150}
            height={75}
            alt={car!.name}
            className="h-[75px] w-auto max-w-fit select-none rounded-lg border border-solid border-indigo-600 bg-background object-contain p-5 lg:h-[100px]"
          />
        </Button>
      </div>

      <div className="flex h-fit flex-col gap-4 rounded-lg bg-background p-5">
        <div className="flex flex-row items-start justify-between">
          <div className="flex flex-col">
            <span className="text-lg font-semibold">{car!.name}</span>
            <span className="text-sm text-slate-500">{car!["car-type"]}</span>
          </div>
          <Button variant="icon" onClick={handleFavorite}>
            <Heart
              size={20}
              strokeWidth={favorite ? 0 : 2}
              className={cn(favorite && "fill-indigo-600")}
            />
          </Button>
        </div>
        <p className="text-sm leading-6 text-slate-600">{car!.description}</p>

        <div className="flex flex-row gap-4">
          <Tooltip tooltipContent={`${car!["tank-capacity"]}L fuel capacity`}>
            <div className="flex flex-row gap-1.5">
              <Fuel size={16} className="text-slate-500" />
              <span className="text-sm text-slate-500">
                {car!["tank-capacity"]}L
              </span>
            </div>
          </Tooltip>
          <Tooltip tooltipContent={`${car!["power"]} peak power`}>
            <div className="flex flex-row gap-1.5">
              <Zap size={16} className="text-slate-500" />
              <span className="text-sm text-slate-500">{car!["power"]}</span>
            </div>
          </Tooltip>
          <Tooltip
            tooltipContent={`${car!["seating-capacity"]} adult passengers`}
          >
            <div className="flex flex-row gap-1.5">
              <UsersRound size={16} className="text-slate-500" />
              <span className="text-sm text-slate-500">
                {car!["seating-capacity"]} People
              </span>
            </div>
          </Tooltip>
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-slate-600">Rent For</span>
          <div className="flex flex-row flex-wrap gap-3">
            {[1, 2, 4, 6].map((days) => {
              return (
                <Button
                  key={days}
                  variant="outline"
                  className={cn("px-6", day === days && "border-indigo-600")}
                  onClick={() => setDay(days)}
                >
                  {days > 1 ? days + "Days" : day + " Day"}
                </Button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-row items-center justify-between gap-4">
          <span className="text-3xl font-bold tracking-wide">
            ${day * car!["rent-price-per-day"]}/
            <span className="text-base font-normal text-slate-500">
              {day > 1 ? day + " days" : "day"}
            </span>
          </span>
          <Button onClick={() => router.push(`/rent?id=${id}`)}>
            Rent Now
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:col-span-2">
        <h3 className="text-2xl font-bold">Reviews</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {car!.reviews.map((review) => {
            return <ReviewCard review={review} key={review.id} />;
          })}
        </div>
      </div>

      <div className="sm:col-span-2">
        <PopularCars />
      </div>
    </main>
  );
};

export default Page;
