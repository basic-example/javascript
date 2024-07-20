import Link from "next/link";

export default function RootPage(): JSX.Element {
  return (
    <main>
      <h1>Root Page</h1>
      <Link href="/error-400">error-400</Link>
      <Link href="/error-500">error-500</Link>
    </main>
  );
}
