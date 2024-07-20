import Link from "next/link";

export default function RootPage(): JSX.Element {
  return (
    <main>
      <h1>Root Page</h1>
      <p>please check response header</p>
      <Link href="/settings">/settings</Link>
      <Link href="/settings/account">/settings/account</Link>
    </main>
  );
}
