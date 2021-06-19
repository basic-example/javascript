import Link from "next/link";
import React from "react";

export default function RootPage(): JSX.Element {
  return (
    <div>
      <h1>Root Page</h1>
      <Link href="/posts/1">post 1</Link>
      <Link href="/posts/2">post 2</Link>
      <Link href="/posts/3">post 3</Link>
    </div>
  );
}
