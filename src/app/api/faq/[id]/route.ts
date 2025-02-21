import errorHandler from "@/components/composed/errorHandler";
import faqHandler from "@/dbHooks/faq";
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
    const faq = await faqHandler().deleteFaq(idRefined);
    return NextResponse.json(faq);
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
        question: z.string(),
        answer: z.string(),
      })
      .parse(body);

    const faq = await faqHandler().updateFaq(idRefined, {
      ...data,
    });
    return NextResponse.json(faq);
  } catch (e) {
    return NextResponse.json(errorHandler().ValidationError(e), {
      status: 400,
    });
  }
}
