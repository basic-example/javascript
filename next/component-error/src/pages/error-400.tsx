import Error from "next/error";

export default function Error400(): JSX.Element {
  const statusCode = 400;
  return <Error statusCode={statusCode} />;
}
