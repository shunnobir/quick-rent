import Skeleton from "@/components/skeleton";
import { Heart } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <main className="mx-auto grid max-w-[1220px] grid-cols-1 gap-6 px-5 py-4 pb-[100px] sm:grid-cols-2 sm:px-10 xl:px-0">
      <div className="flex h-[350px] w-full flex-col gap-2 lg:h-[500px]">
        <Skeleton className="flex h-[250px] w-full lg:h-[350px]" />
        <div className="flex flex-row justify-between gap-2">
          <Skeleton className="flex h-[75px] w-1/2 lg:h-[100px]" />
          <Skeleton className="flex h-[75px] w-1/2 lg:h-[100px]" />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-row items-start justify-between">
          <div className="flex flex-col gap-1">
            <Skeleton className="flex h-6 w-52" />
            <Skeleton className="flex h-5 w-32" />
          </div>
          <Heart
            size={24}
            strokeWidth={0}
            className="animate-pulse fill-slate-300"
          />
        </div>

        <Skeleton className="h-[150px] w-full" />

        <div className="flex flex-row gap-2">
          <Skeleton className="flex h-6 w-20" />
          <Skeleton className="flex h-6 w-20" />
          <Skeleton className="flex h-6 w-20" />
        </div>

        <div className="flex flex-col gap-2">
          <Skeleton className="flex h-6 w-32 bg-slate-300" />
          <div className="flex flex-row flex-wrap gap-2">
            <Skeleton className="flex h-10 w-20" />
            <Skeleton className="flex h-10 w-20" />
            <Skeleton className="flex h-10 w-20" />
            <Skeleton className="flex h-10 w-20" />
          </div>
        </div>

        <div className="flex flex-row justify-between">
          <Skeleton className="flex h-10 w-32" />
          <Skeleton className="flex h-10 w-32" />
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:col-span-2">
        <h3 className="text-2xl font-bold">Reviews</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <Skeleton className="h-[200px] w-full" />
          <Skeleton className="h-[200px] w-full" />
          <Skeleton className="h-[200px] w-full" />
        </div>
      </div>
    </main>
  );
};

export default Loading;
