import { GetServerSideProps } from "next";
import React from "react";

export default function HomePage(): JSX.Element {
  return (
    <div>
      <h1>Home Page (Redirect)</h1>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/main",
      permanent: false,
    },
  };
};
