import { GetStaticPaths, GetStaticProps } from "next";
import { Params } from "next/dist/next-server/server/router";
import React from "react";

export default function UserIdPage({ id }: { id: string }): JSX.Element {
  return (
    <div>
      <h1>User ID:{id} Page</h1>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }: Params) => {
  return {
    props: {
      id: params.id,
    },
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          id: "1",
        },
      },
      {
        params: {
          id: "2",
        },
      },
      {
        params: {
          id: "3",
        },
      },
    ],
    fallback: false,
  };
};
