import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { parsedBody } from "@/serverUtils";
import walletHandler from "@/dbHooks/wallet";
import errorHandler from "@/components/composed/errorHandler";

export async function POST(request: NextRequest) {
  try {
    const body = await parsedBody(request);

    const data = z
      .object({
        currency: z.string(),
        chainId: z.string(),
        address: z.string(),
      })
      .parse(body);

    const plan = await walletHandler().addWallet({
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
