import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/app/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card className="w-[350px]">
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
          <Link href={"/"}>Read more</Link>
        </CardFooter>
      </Card>
    </main>
  );
}
