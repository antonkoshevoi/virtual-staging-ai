import { replicate } from "@/app/libs/replicate";

import { NextResponse } from "next/server";
export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { image } = body;

    if (!image) {
      return new NextResponse("Wrong data", { status: 400 });
    }
    const output = await replicate.run(
      "lucataco/sdxl-controlnet:db2ffdbdc7f6cb4d6dab512434679ee3366ae7ab84f89750f8947d5594b79a47",
      {
        input: {
          image,
          prompt: "a picture of a house at night",
        },
      }
    );

    return NextResponse.json(output);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
