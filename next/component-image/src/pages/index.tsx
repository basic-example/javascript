import Image from "next/image";

export default function RootPage(): JSX.Element {
  return (
    <main>
      <style jsx>
        {`
          .custom-image {
            border: solid 1px;
          }
        `}
      </style>
      <h1>Root Page</h1>
      <Image
        className="custom-image"
        src="/150.png"
        alt=""
        width="120"
        height="120"
      />
    </main>
  );
}
