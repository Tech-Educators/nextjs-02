import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Images, Fonts & Scripts</h1>
      <Link href="/gallery">Gallery</Link>
      <Link href="/funkyfont">Funky Font</Link>
      <Link href="/saucyscripts">Saucy Scripts</Link>
    </main>
  );
}
