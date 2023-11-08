"use client";

import { usePathname } from "next/navigation";

export default function PathName() {
  const pathname = usePathname();
  return (
    <div>
      <p>pathname: {pathname}</p>
    </div>
  );
}
