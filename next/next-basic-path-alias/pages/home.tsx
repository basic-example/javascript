import { GetServerSideProps } from "next";
import React from "react";

export default function HomePage({
  message,
}: {
  message: string;
}): JSX.Element {
  return (
    <div>
      <h1>Home Page</h1>
      <p>{message}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      message: "hello world",
    },
  };
};
