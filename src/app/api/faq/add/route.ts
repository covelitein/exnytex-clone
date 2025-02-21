import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { parsedBody } from "@/serverUtils";
import errorHandler from "@/components/composed/errorHandler";
import faqHandler from "@/dbHooks/faq";

export async function POST(request: NextRequest) {
  try {
    const body = await parsedBody(request);

    const data = z
      .object({
        question: z.string(),
        answer: z.string(),
      })
      .parse(body);

    const faq = await faqHandler().addFaq({
      ...data,
    });

    return NextResponse.json({
      faq,
    });
  } catch (e) {
    console.log("error", e);
    return NextResponse.json(errorHandler().ValidationError(e), {
      status: 400,
    });
  }
}
