import { NextRequest, NextResponse } from "next/server";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { nanoid } from "nanoid";
import { extname } from "path";
import errorHandler from "@/components/composed/errorHandler";
import transactionHandler from "@/dbHooks/transaction";
import proofHandler from "@/dbHooks/proof";

// Configuration
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_FILE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "application/pdf",
];

// Initialize S3 client
const r2 = new S3Client({
  region: "auto",
  endpoint: process.env.ENDPOINT ?? "",
  credentials: {
    accessKeyId: process.env.ACCESS_KEY ?? "",
    secretAccessKey: process.env.SECRET_ACCESSKEY ?? "",
  },
});

// File validation utility
const validateFile = (file: File) => {
  if (file.size > MAX_FILE_SIZE) {
    throw new Error("File size exceeds 5MB limit");
  }

  if (!ALLOWED_FILE_TYPES.includes(file.type)) {
    throw new Error("Invalid file type. Allowed types: JPEG, PNG, WebP, PDF");
  }
};

// Generate unique filename
const generateUniqueFilename = (originalName: string) => {
  const ext = extname(originalName);
  const timestamp = Date.now();
  const uniqueId = nanoid(12);
  return `${timestamp}-${uniqueId}${ext}`.toLowerCase();
};

export async function POST(request: NextRequest) {
  try {
    // Check content type
    if (!request.headers.get("content-type")?.includes("multipart/form-data")) {
      throw new Error("Invalid content type. Must be multipart/form-data");
    }

    // Parse form data
    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    const userId = formData.get("userId") as string | null;
    const packageId = formData.get("packageId") as string | null;
    const amount = formData.get("amount") as string | null;
    const paymentType = formData.get("paymentType") as string | null;
    const paymentToken = formData.get("paymentToken") as string | null;

    // Validate required fields
    if (
      !file ||
      !userId ||
      !packageId ||
      !amount ||
      !paymentType ||
      !paymentToken
    ) {
      throw new Error("Missing required fields");
    }

    // Validate file
    validateFile(file);

    // Generate unique filename
    const uniqueFilename = generateUniqueFilename(file.name);

    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Prepare upload command
    const putObjectCommand = new PutObjectCommand({
      Bucket: "incapfx-store",
      Key: uniqueFilename,
      Body: buffer,
      ContentType: file.type,
      Metadata: {
        originalName: file.name,
        fileSize: file.size.toString(),
      },
    });

    // Upload to R2
    const response = await r2.send(putObjectCommand);

    // Create transaction
    const transaction = await transactionHandler().addTransaction({
      userId: Number(userId),
      planId: Number(packageId),
      amount: Number(amount),
      paymentType: "crypto",
      paymentToken,
    });

    // Create proof
    const proof = await proofHandler().addProof({
      userId: Number(userId),
      transactionId: Number(transaction.id),
      url: `${process.env.CDN_URL}/${uniqueFilename}`,
      key: uniqueFilename,
    });

    return NextResponse.json({
      success: true,
      data: {
        filename: uniqueFilename,
        originalName: file.name,
        size: file.size,
        type: file.type,
        etag: response.ETag,
      },
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: errorHandler().ValidationError(error) },
      { status: 400 }
    );
  }
}
