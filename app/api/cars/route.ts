import { NextRequest, NextResponse } from "next/server";
import cars from "@/lib/cars.json";
import { setTimeout } from "timers/promises";
import { z } from "zod";
import { shuffle } from "@/lib/utils";

const getParamsSchema = z.object({
  filter: z.enum(["popular", "recommended"]).optional(),
  limit: z.coerce.number().optional(),
});

export async function GET(req: NextRequest) {
  try {
    const params = getParamsSchema.parse(
      Object.fromEntries(req.nextUrl.searchParams),
    );

    await setTimeout(2500); /* simulate database query */
    const temp = shuffle([...cars]);
    const result =
      params.filter === "popular"
        ? temp.slice(0, 4)
        : params.filter === "recommended"
          ? temp.slice(0, 6)
          : temp;
    return NextResponse.json(
      params.limit !== undefined ? result.slice(0, params.limit) : result,
      {
        status: 200,
      },
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json("Invalid search parameters", {
        status: 400,
      });
    } else {
      return NextResponse.json("Internal server error", {
        status: 500,
      });
    }
  }
}
