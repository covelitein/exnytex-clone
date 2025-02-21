import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { parsedBody } from "@/serverUtils";
import userHandler from "@/dbHooks/user";
import errorHandler from "@/components/composed/errorHandler";
import { mailer } from "@/mailer";
import { randomBytes } from "crypto";

const registrationSchema = z.object({
  personal: z.object({
    firstName: z.string(),
    lastName: z.string(),
    dob: z.string(),
    gender: z.string(),
  }),
  contact: z.object({
    email: z.string(),
    phone: z.string(),
    address: z.string(),
  }),
  account: z.object({
    password: z.string(),
    confirmPassword: z.string(),
  }),
});

export async function POST(request: NextRequest) {
  try {
    const body = await parsedBody(request);
    const data = registrationSchema.parse(body);

    // Check if user already exists
    const existingUser = await userHandler().getUserByEmailandPhone(
      data.contact.email,
      data.contact.phone
    );
    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email or phone already exists!" },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(data.account.password, 10);

    const token = randomBytes(32).toString("hex");
    const verificationExpiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // Token expires in 24 hours

    // Register user in database
    const user = await userHandler().registerUser({
      firstName: data.personal.firstName,
      lastName: data.personal.lastName,
      dob: data.personal.dob,
      email: data.contact.email,
      phone: data.contact.phone,
      address: data.contact.address,
      gender: data.personal.gender,
      password: hashedPassword,
      verificationToken: token,
      verificationExpiresAt: verificationExpiresAt,
    });

    // Send confirmation email
    await mailer.sendTemplatedMail(
      {
        from: '"noreply" <noreply@incapfx.com>',
        to: data.contact.email,
        subject: "Welcome to Incapfx!",
      },
      {
        title: "Account Confirmation",
        children: `We're excited to have you on board. Get started by confirming your email. Click the button below to verify.`,
        confirmationUrl: `${process.env.NEXT_PUBLIC_API_URL}/email-confirmation?token=${encodeURIComponent(token)}`,
        footerText: "© 2025 Incapfx. All rights reserved.",
      }
    );

    return NextResponse.json({ success: true, user });
  } catch (e) {
    console.error("Registration Error:", e);
    return NextResponse.json(
      { error: errorHandler().ValidationError(e) },
      { status: 400 }
    );
  }
}
