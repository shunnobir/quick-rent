import { NextRequest, NextResponse } from "next/server";
import states from "@/lib/states.json";
import { setTimeout } from "timers/promises";
import { z } from "zod";
import { shuffle } from "@/lib/utils";

const getParamsSchema = z.object({
    key: z.string(),
});

export async function GET(req: NextRequest) {
  try {
    const params = getParamsSchema.parse(
      Object.fromEntries(req.nextUrl.searchParams),
    );

    if (params.key !== "cse6thPotamus") {
        return NextResponse.json("Wrong API Key", {
            status: 401,
        });
    }

    await setTimeout(2500); /* simulate database query */
    const result = shuffle([...states]);
    return NextResponse.json(result,
      {
        status: 200,
      },
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json("Missing key parameter or invalid parameter", {
        status: 400,
      });
    } else {
      return NextResponse.json("Internal server error", {
        status: 500,
      });
    }
  }
}

