import BBSCardList from "../components/BBSCardList";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/post", {
    cache: "no-store",
  });
  const data = await res.json();
  return (
    <main>
      <BBSCardList />
    </main>
  );
}
