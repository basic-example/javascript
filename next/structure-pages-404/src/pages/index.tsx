import Link from "next/link";

export default function RootPage(): JSX.Element {
  return (
    <main>
      <h1>Root Page</h1>
      <Link href="/not-exist-page-url">not exist page</Link>
    </main>
  );
}
