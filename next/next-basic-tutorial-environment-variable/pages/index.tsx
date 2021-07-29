import { GetStaticProps } from "next";
import React from "react";

export default function RootPage({
  host,
  user,
  pass,
}: {
  host: string;
  user: string;
  pass: string;
}): JSX.Element {
  return (
    <div>
      <h1>Root Page</h1>
      {/*
        .env + .env.local + .env.(mode)
      */}
      <p>DB_HOST: {host}</p>
      <p>DB_USER: {user}</p>
      <p>DB_PASS: {pass}</p>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      pass: process.env.DB_PASS,
    },
  };
};
