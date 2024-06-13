import React from "react";
import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Card,
} from "./components/ui/card";
import Link from "next/link";

const BBSCard = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          eum possimus maiores excepturi illum magnam dignissimos quod quisquam
          enim, mollitia soluta amet id vero sapiente iste. Dolorem numquam
          aperiam odio!
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href={"/"} className="text-blue-500">
            Read more
          </Link>
        </CardFooter>
      </Card>
    </>
  );
};

export default BBSCard;
