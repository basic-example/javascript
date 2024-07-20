import Link from "next/link";

export default function RootPage(): JSX.Element {
  return (
    <main>
      <h1>Root Page</h1>
      <nav>
        <p>
          <Link href="/api/files">/api/files</Link>
        </p>
        <p>
          <Link href="/api/files/test">/api/files/test</Link>
        </p>
        <p>
          <Link href="/api/posts">/api/posts</Link>
        </p>
        <p>
          <Link href="/api/posts/aaa/bbb">/api/posts/aaa/bbb</Link>
        </p>
        <p>
          <Link href="/api/users/1">/api/users/1</Link>
        </p>
      </nav>
    </main>
  );
}
