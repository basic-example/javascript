"use client";

import { useRouter } from "next/navigation";

export default function Nav() {
  const router = useRouter();

  return (
    <nav>
      <ul>
        <li>
          <button type="button" onClick={() => router.push("/dashboard")}>
            router.push button
          </button>
        </li>
      </ul>
    </nav>
  );
}
