import Link from "next/link";

export default function RootPage(): JSX.Element {
  return (
    <main>
      <h1>Root Page</h1>
      <Link href="/">Home</Link>
      <Link href="/hello">Hello</Link>
      <Link href="/world">World</Link>
    </main>
  );
}
