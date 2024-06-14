import { NextResponse } from "next/server";
import prisma from "../../../lib/prismaClient";

export async function GET(req: Request) {
  const data = await prisma.post.findMany();
  return NextResponse.json(data);
}
// サーバーアクションでの実行のため、必要ない
// export async function POST(req: Request) {
//   const { title, content, username } = await req.json();
//   const data = await prisma.post.create({
//     data: {
//       title,
//       content,
//       username,
//     },
//   });
//   return NextResponse.json(data);
// }
