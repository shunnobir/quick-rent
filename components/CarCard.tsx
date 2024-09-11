"use client";

import { CarType } from "@/types";
import React from "react";
import Button from "@/components/button";
import { Fuel, Heart, UsersRound, Zap } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Tooltip from "@/components/tooltip";

const CarCard = (props: CarType) => {
  const router = useRouter();

  return (
    <div
      className="flex flex-col gap-4 rounded-lg border border-solid border-slate-200 bg-background p-5 shadow-sm hover:cursor-pointer hover:border-indigo-600"
      onClick={() => router.push(`/cars/${props.id}`)}
    >
      <div className="flex flex-row items-start justify-between">
        <div className="flex flex-col">
          <span className="text-lg font-semibold">{props.name}</span>
          <span className="text-sm text-slate-500">{props["car-type"]}</span>
        </div>
        <Button variant="icon">
          <Heart size={20} />
        </Button>
      </div>
      <div className="flex h-[150px] w-full items-end">
        <Image
          src={props.images[0].url}
          width={300}
          height={150}
          alt={props.name}
          className="h-auto w-full select-none"
        />
      </div>

      <div className="flex flex-row gap-4">
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
        <Button>Rent Now</Button>
      </div>
    </div>
  );
};

export default CarCard;
