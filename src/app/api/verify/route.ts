import { NextRequest, NextResponse } from "next/server";
import { prismaClient } from "@/prisma";
import userHandler from "@/dbHooks/user";
import { parsedBody } from "@/serverUtils";
import { z } from "zod";

export async function POST(request: NextRequest) {
  try {
    // Parse the request body and validate token
    const body = await parsedBody(request);
    const data = z
      .object({
        token: z.string().trim(),
      })
      .parse(body);
    if (!data.token) {
      return NextResponse.json({ error: "Token is required" }, { status: 400 });
    }
    console.log(data.token);

    // Find user with the token
    const user = await prismaClient.user.findFirst({
      where: { verificationToken: data.token },
    });

    if (!user) {
      return NextResponse.json({ error: "Invalid token" }, { status: 400 });
    }

    // Check if the token is expired
    if (
      user.verificationExpiresAt &&
      new Date(user.verificationExpiresAt) < new Date()
    ) {
      return NextResponse.json(
        {
          error: "Token is expired",
        },
        { status: 400 }
      );
    }

    // Check if email is already verified
    if (user.emailVerified) {
      return NextResponse.json(
        { message: "Email already verified" },
        { status: 200 }
      );
    }

    // Verify the user's email
    const userVerified = await userHandler().verifyEmail(data.token);
    return NextResponse.json({ success: true, userVerified });
  } catch (e) {
    console.error("Email Verification Error:", e);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
