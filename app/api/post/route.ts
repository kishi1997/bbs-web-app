import { NextResponse } from "next/server";
import prisma from "../../../lib/prismaClient";

export async function GET(req: Request) {
  const data = await prisma.post.findMany();
  return NextResponse.json(data);
}
