import Skeleton from "@/components/skeleton";
import React from "react";

const SuccessPageLoading = () => {
  return (
    <main className="mx-auto flex max-w-[1220px] flex-1 flex-col items-center justify-center gap-5 px-5 py-8 pb-[100px]">
      <Skeleton className="mx-auto h-10 w-52" />
      <div className="flex w-full flex-col items-center gap-2">
        <Skeleton className="h-32 w-full sm:h-10" />
        <Skeleton className="mx-auto h-10 w-24" />
      </div>
    </main>
  );
};

export default SuccessPageLoading;
