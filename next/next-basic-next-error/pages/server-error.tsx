import Error from "next/error";
import React from "react";

export default function ServerError(): JSX.Element {
  const statusCode = 500;
  return <Error statusCode={statusCode} />;
}
