import { GetServerSideProps } from "next";
import React from "react";

export default function ThrowErrorPage(): JSX.Element {
  return (
    <div>
      <h1>Throw-Error Page</h1>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  throw new Error("error occurred");
};
