import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { parsedBody } from "@/serverUtils";
import packageHandler from "@/dbHooks/package";
import errorHandler from "@/components/composed/errorHandler";

export async function POST(request: NextRequest) {
  try {
    const body = await parsedBody(request);

    const data = z
      .object({
        price: z.number(),
        tier: z.string(),
        accountType: z.string(),
        challengeCurrency: z.string(),
        targetProfit: z.string(),
        tradingPeriod: z.string(),
        leverage: z.string(),
        platform: z.string(),
      })
      .parse(body);

    const plan = await packageHandler().addPackage({
      ...data,
    });

    return NextResponse.json({
      plan,
    });
  } catch (e) {
    console.log("error", e);
    return NextResponse.json(errorHandler().ValidationError(e), {
      status: 400,
    });
  }
}
