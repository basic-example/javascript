import Link from "next/link";

export default function RootPage(): JSX.Element {
  return (
    <div>
      <h1>root page</h1>
      <Link href="/dashboard">dashboard link</Link>
    </div>
  );
}
