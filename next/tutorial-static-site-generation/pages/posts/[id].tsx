import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";

export default function PostIdPage({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  );
}

export const getStaticProps: GetStaticProps<{
  post: { title: string };
}> = async (context) => {
  return { props: { post: { title: `ID: ${context.params?.id} POST` } } };
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  return {
    paths: [
      {
        params: { id: "1" },
      },
      {
        params: { id: "2" },
      },
    ],
    fallback: false,
  };
};
