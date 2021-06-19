import Link from "next/link";
import React from "react";

export default function RootPage(): JSX.Element {
  return (
    <div>
      <h1>Root Page</h1>
      <Link href="/hello">hello</Link>
      <Link href="/world">world</Link>
    </div>
  );
}
