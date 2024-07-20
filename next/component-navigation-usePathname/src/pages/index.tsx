import Link from "next/link";

export default function RootPage(): JSX.Element {
  return (
    <main>
      <h1>Root Page</h1>
      <nav>
        <ul>
          <li>
            <Link href="/dashboard">dashboard</Link>
          </li>
          <li>
            <Link href="/account">account</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
