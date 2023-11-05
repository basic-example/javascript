import Link from "next/link";
import React from "react";

export default function RootPage(): JSX.Element {
  return (
    <div>
      <h1>Root Page</h1>
      <Link href="/">Home</Link>
      <Link href="/hello">Hello</Link>
      <Link href="/world">World</Link>
    </div>
  );
}
