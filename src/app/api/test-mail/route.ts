import { NextRequest, NextResponse } from "next/server";
import errorHandler from "@/components/composed/errorHandler";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const r2 = new S3Client({
  region: "auto",
  endpoint:'https://1fdc7ca99c48785bcfb9b799915a8256.r2.cloudflarestorage.com',
  credentials: {
    accessKeyId: process.env.ACCESS_KEY ?? "",
    secretAccessKey: process.env.SECRET_ACCESSKEY ?? "",
  },
  forcePathStyle: true,
});

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json(errorHandler().ValidationError("No file provided"), {
        status: 400,
      });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = `${Date.now()}-${file.name}`;

    const uploadCommand = new PutObjectCommand({
      Bucket: process.env.BUCKET_NAME ?? "incapfx-store",
      Key: fileName,
      Body: buffer,
      ContentType: file.type,
    });

    await r2.send(uploadCommand);

    return NextResponse.json({ success: true, fileName }, { status: 200 });
  } catch (e) {
    console.log("error", e);
    return NextResponse.json(errorHandler().ValidationError(e), {
      status: 400,
    });
  }
}