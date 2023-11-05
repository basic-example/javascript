import Link from "next/link";
import React from "react";

export default function RootPage(): JSX.Element {
  return (
    <div>
      {/* page url is start with basePath("abcd") */}
      <h1>Root Page</h1>
      <Link href="/hello">hello</Link>
    </div>
  );
}
