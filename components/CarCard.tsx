"use client";

import Button from "@/components/button";
import Tooltip from "@/components/tooltip";
import useFavorite from "@/hooks/useFavorite";
import { cn } from "@/lib/utils";
import { CarType } from "@/types";
import { Fuel, Heart, UsersRound, Zap } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CarCard = (props: CarType) => {
  const router = useRouter();
  const { favorite, handleFavorite } = useFavorite(props.id);

  return (
    <div
      className="flex max-h-[350px] flex-col gap-4 rounded-lg border border-solid border-slate-200 bg-background p-5 shadow-sm hover:cursor-pointer hover:border-indigo-600"
      onClick={() => router.push(`/cars/${props.id}`)}
    >
      <div className="flex flex-row items-start justify-between">
        <div className="flex flex-col">
          <span className="text-lg font-semibold">{props.name}</span>
          <span className="text-sm text-slate-500">{props["car-type"]}</span>
        </div>
        <Button variant="icon" onClick={handleFavorite}>
          <Heart
            size={20}
            strokeWidth={favorite ? 0 : 2}
            className={cn(favorite && "fill-indigo-600")}
          />
        </Button>
      </div>
      <div className="mt-auto flex h-[150px] w-full items-end justify-center">
        <Image
          src={props.images[0].url}
          width={300}
          height={150}
          alt={props.name}
          className="h-full w-auto select-none object-contain"
        />
      </div>

      <div className="mt-auto flex flex-row gap-4">
        <Tooltip tooltipContent={`${props["tank-capacity"]}L fuel capacity`}>
          <div className="flex flex-row gap-1.5">
            <Fuel size={16} className="text-slate-500" />
            <span className="text-sm text-slate-500">
              {props["tank-capacity"]}L
            </span>
          </div>
        </Tooltip>
        <Tooltip tooltipContent={`${props["power"]} peak power`}>
          <div className="flex flex-row gap-1.5">
            <Zap size={16} className="text-slate-500" />
            <span className="text-sm text-slate-500">{props["power"]}</span>
          </div>
        </Tooltip>
        <Tooltip
          tooltipContent={`${props["seating-capacity"]} adult passengers`}
        >
          <div className="flex flex-row gap-1.5">
            <UsersRound size={16} className="text-slate-500" />
            <span className="text-sm text-slate-500">
              {props["seating-capacity"]} People
            </span>
          </div>
        </Tooltip>
      </div>

      <div className="flex flex-row items-center justify-between gap-4">
        <span className="text-xl font-semibold tracking-wide">
          ${props["rent-price-per-day"]}/
          <span className="text-base font-normal text-slate-500">day</span>
        </span>
        <Button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            router.push(`/rent/?id=${props.id}`);
          }}
        >
          Rent Now
        </Button>
      </div>
    </div>
  );
};

export default CarCard;
