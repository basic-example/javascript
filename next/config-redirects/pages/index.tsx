import Link from "next/link";
import React from "react";

export default function RootPage(): JSX.Element {
  return (
    <div>
      <h1>Root Page</h1>
      <p>
        recommand open in new window to show valid url change result instead of
        codesandbox browser.
      </p>
      <Link href="/home">home (redirect to main)</Link>
    </div>
  );
}
