import Link from "next/link";

export default function RootPage(): JSX.Element {
  return (
    <main>
      <h1>Root Page</h1>
      <p>root page is rendered</p>
      <Link href="/home">home link</Link>
    </main>
  );
}
