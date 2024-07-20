import Image from "next/image";
import Link from "next/link";

export default function RootPage(): JSX.Element {
  return (
    <main>
      <h1>Root Page</h1>
      <Link href="/dashboard">dashboard</Link>
      <Image src="./next.svg" alt={""} width="100" height="100" />
      <Image src="/next.svg" alt={""} width="100" height="100" />
      <Image src="next.svg" alt={""} width="100" height="100" />
    </main>
  );
}
