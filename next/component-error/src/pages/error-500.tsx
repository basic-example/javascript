import Error from "next/error";

export default function Error500(): JSX.Element {
  const statusCode = 500;
  return <Error statusCode={statusCode} />;
}
