import Skeleton from "@/components/skeleton";
import React from "react";

const RentPageLoading = () => {
  return (
    <main className="mx-auto grid min-h-52 w-full max-w-[1220px] flex-1 grid-cols-1 gap-6 px-5 py-4 pb-[100px] sm:grid-cols-[1.5fr_2.5fr] sm:px-10 xl:px-0">
      <div className="flex h-fit w-full flex-col gap-5">
        <Skeleton className="h-[300px] w-full" />
        <Skeleton className="h-[250px] w-full" />
      </div>
      <div className="flex h-fit w-full flex-col gap-5">
        <Skeleton className="h-[350px] w-full lg:h-[250px]" />
        <Skeleton className="h-[350px] w-full lg:h-[250px]" />
        <Skeleton className="h-[450px] w-full lg:h-[350px]" />
        <Skeleton className="ml-auto h-[48px] w-40" />
      </div>
    </main>
  );
};

export default RentPageLoading;
