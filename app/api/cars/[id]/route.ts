import { NextRequest, NextResponse } from "next/server";
import cars from "@/lib/cars.json";
import { setTimeout } from "timers/promises";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    await setTimeout(2500); /* simulate database query */
    const result = cars.find((car) => car.id === params.id);
    if (!result) {
      return NextResponse.json(
        { message: `could not find any car with id "${params.id}"` },
        {
          status: 400,
        },
      );
    }
    return NextResponse.json([result], {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Internal server error", {
      status: 500,
    });
  }
}
