"use client";

import RentInfo from "@/components/RentInfo";
import Button from "@/components/button";
import Input from "@/components/input";
import Separator from "@/components/separator";
import Skeleton from "@/components/skeleton";
import { useCar } from "@/hooks/useCar";
import { CarType } from "@/types";
import Image from "next/image";
import { notFound, useRouter, useSearchParams } from "next/navigation";

const RentPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  if (!searchParams.get("id")) {
    notFound();
  }

  const { data, fetching: loading } = useCar(searchParams.get("id")!);
  const car = data ? (data as CarType[])[0] : undefined;

  if (!car && !loading) {
    notFound();
  }

  return (
    <main className="mx-auto grid w-full max-w-[1220px] flex-1 grid-cols-1 gap-6 px-5 py-4 pb-[100px] sm:grid-cols-[1.5fr_2.5fr] sm:px-10 xl:px-0">
      {loading ? (
        <div className="flex h-fit w-full flex-col gap-5">
          <Skeleton className="h-[300px] w-full" />
          <Skeleton className="h-[250px] w-full" />
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          <div className="flex max-h-[350px] flex-col gap-4 rounded-lg border border-solid border-slate-200 bg-background p-5 shadow-sm">
            <div className="flex flex-row items-start justify-between">
              <div className="flex flex-col">
                <span className="text-lg font-semibold">{car!.name}</span>
                <span className="text-sm text-slate-500">
                  {car!["car-type"]}
                </span>
              </div>
            </div>
            <div className="mt-auto flex h-[150px] w-full items-end justify-center">
              <Image
                src={car!.images[0].url}
                width={300}
                height={150}
                alt={car!.name}
                className="h-full w-auto select-none object-contain"
              />
            </div>
            <span className="text-xl font-semibold tracking-wide">
              ${car!["rent-price-per-day"]}/
              <span className="text-base font-normal text-slate-500">day</span>
            </span>
          </div>

          <div className="flex h-fit flex-col gap-4 rounded-lg bg-background p-5">
            <h4 className="text-lg font-bold text-slate-700">Rental Summary</h4>
            <div className="flex flex-row items-center justify-between">
              <span>Subtotal</span>
              <span>${car!["rent-price-per-day"]}</span>
            </div>
            <div className="flex flex-row items-center justify-between">
              <span>Tax</span>
              <span>$0</span>
            </div>
            <Separator />
            <div className="flex flex-row items-center justify-between">
              <span className="text-xl">Total</span>
              <span className="text-xl">${car!["rent-price-per-day"]}</span>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-5">
        <RentInfo />

        <div className="flex h-fit flex-col gap-4 rounded-lg bg-background p-5">
          <h4 className="flex flex-row items-center justify-between text-lg font-bold text-slate-700">
            Payment information
            <div className="flex flex-row items-center gap-2">
              <Image
                src="/images/visa-logo.svg"
                width={40}
                height={24}
                alt="visa logo"
                className="h-4 w-auto"
              />
              <Image
                src="/images/master-card-logo.svg"
                width={40}
                height={24}
                alt="visa logo"
              />
            </div>
          </h4>
          <Input label="Card number" placeholder="Card number" />
          <Input label="Name on card" placeholder="Name on card" />
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <Input
              label="Expiration date (MM/YY)"
              placeholder="Expiration date (MM/YY)"
            />
            <Input label="CVC" placeholder="CVC" />
          </div>
        </div>

        <Button
          className="ml-auto min-w-40"
          onClick={() => router.push("/rent/success")}
        >
          Rent
        </Button>
      </div>
    </main>
  );
};

export default RentPage;
