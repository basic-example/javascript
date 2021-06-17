import Link from "next/link";
import React from "react";

export default function MainPage(): JSX.Element {
  return (
    <div>
      <h1>Main Page</h1>
      <Link href="/">root</Link>
    </div>
  );
}
