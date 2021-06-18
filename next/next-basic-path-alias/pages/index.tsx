import Link from "next/link";
import React from "react";

export default function RootPage(): JSX.Element {
  return (
    <div>
      <h1>Root Page</h1>
      <Link href="/home">home</Link>
      <br />
      <Link href="/alias-home">alias-home</Link>
      <br />
      <Link href="/user/1">user 1</Link>
      <br />
      <Link href="/alias-user/1">alias user 1</Link>
      <br />
    </div>
  );
}
