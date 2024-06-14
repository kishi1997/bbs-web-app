import { BBSData } from "@/app/types/type";
import Link from "next/link";
import React from "react";
async function getBBSData(id: number): Promise<BBSData> {
  const res = await fetch(`http://localhost:3000/api/post/${id}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}
const page = async ({ params }: { params: { id: number } }) => {
  const data = await getBBSData(params.id);
  const { title, content, username } = data;
  return (
    <div className="mx-auto max-w-4xl p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-grey-700">{username}</p>
      </div>
      <div className="mb-8">
        <p className="text-grey-900">{content}</p>
      </div>
      <Link href={"/"} className="bg-blue-500 text-white font-bold px-2 py-4">
        戻る
      </Link>
    </div>
  );
};

export default page;
