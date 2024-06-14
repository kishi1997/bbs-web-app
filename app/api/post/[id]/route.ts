import { NextResponse } from "next/server";
import prisma from "../../../../lib/prismaClient";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const data = await prisma.post.findUnique({ where: { id: parseInt(id) } });
  return NextResponse.json(data);
}
