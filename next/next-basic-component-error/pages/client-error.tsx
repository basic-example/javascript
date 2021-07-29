import Error from "next/error";
import React from "react";

export default function ClientError(): JSX.Element {
  const statusCode = 400;
  return <Error statusCode={statusCode} />;
}
