import Image from "next/image";

export default async function Home() {
  const res = await fetch("http://localhost:3001/api/message", { next: { revalidate: 2 } });
  const data = await res.json();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Welcome to my API</h1>
      <form action="/api/message" method="POST">
        <input type="text" name="messagefield" />
        <button type="submit">Submit</button>
      </form>
      <p>Someone call the {data}</p>
    </main>
  );
}
