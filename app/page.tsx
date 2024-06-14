import BBSCardList from "../components/BBSCardList";
import { BBSData } from "./types/type";

async function getBBSData(): Promise<BBSData[]> {
  const res = await fetch("http://localhost:3000/api/post", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}
export default async function Home() {
  const BBSAllData = await getBBSData();
  return (
    <main>
      <BBSCardList BBSAllData={BBSAllData} />
    </main>
  );
}
