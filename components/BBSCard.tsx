import React from "react";
import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Card,
} from "./ui/card";
import Link from "next/link";
import { BBSData } from "@/app/types/type";
type BBSDataProps = {
  BBSData: BBSData;
};
const BBSCard = ({ BBSData }: BBSDataProps) => {
  const { title, content, id } = BBSData;
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>{content}</CardContent>
        <CardFooter className="flex justify-between">
          <Link href={`/bbs-posts/${id}`} className="text-blue-500">
            Read more
          </Link>
        </CardFooter>
      </Card>
    </>
  );
};

export default BBSCard;
