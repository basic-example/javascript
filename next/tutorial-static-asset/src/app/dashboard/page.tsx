import Image from "next/image";

export default function Page() {
  return (
    <div>
      <Image src="./next.svg" alt={""} width="100" height="100" />
      <Image src="/next.svg" alt={""} width="100" height="100" />
      <Image src="next.svg" alt={""} width="100" height="100" />
    </div>
  );
}
