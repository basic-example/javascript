import Link from "next/link";

export default function Page() {
  return (
    <div>
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
    </div>
  );
}
