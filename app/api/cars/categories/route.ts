import { shuffle } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";
import cars from "@/lib/cars.json";
import { setTimeout } from "timers/promises";

export async function GET(req: NextRequest) {
  try {
    req; /* unused parameter */
    await setTimeout(2500); /* simulate database query */
    const temp = shuffle([...cars]);
    const prices: number[] = [20];
    let maxPrice = Math.max(...temp.map((car) => car["rent-price-per-day"]));
    maxPrice = maxPrice + (maxPrice % 10);
    for (let i = 50; ; i += 50) {
      prices.push(i);
      if (i > maxPrice) {
        break;
      }
    }

    const result = [
      {
        id: "1",
        name: "type",
        type: "options",
        categories: Array.from(new Set(temp.map((car) => car["car-type"]))),
      },
      {
        id: "2",
        name: "capacity",
        type: "options",
        categories: Array.from(
          new Set(temp.map((car) => car["seating-capacity"])),
        )
          .sort()
          .map((elem) => `${elem} Person${elem > 1 ? "s" : ""}`),
      },
      {
        id: "3",
        name: "price",
        type: "slider",
        categories: prices,
      },
    ];
    return NextResponse.json(result, {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Internal server error", {
      status: 500,
    });
  }
}
