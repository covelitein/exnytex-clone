import errorHandler from "@/components/composed/errorHandler";
import packageHandler from "@/dbHooks/package";
import { parsedBody } from "@/serverUtils";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

type paramsType = Promise<{ id: number }>;

export async function DELETE(
  request: NextRequest,
  props: { params: paramsType }
) {
  const { id } = await props.params;
  const idRefined = Number(id);
  try {
    const category = await packageHandler().deletePackage(idRefined);
    return NextResponse.json(category);
  } catch (e) {
    console.log("e", e);
    return NextResponse.json(errorHandler().ValidationError(e), {
      status: 400,
    });
  }
}

export async function PATCH(
  request: NextRequest,
  props: { params: paramsType }
) {
  try {
    const { id } = await props.params;
    const body = await parsedBody(request);
    const idRefined = Number(id);
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

    const category = await packageHandler().updatePackage(idRefined, {
      ...data,
    });
    return NextResponse.json(category);
  } catch (e) {
    return NextResponse.json(errorHandler().ValidationError(e), {
      status: 400,
    });
  }
}
