import { useRouter } from "next/router";
import React from "react";

const Post = (): JSX.Element => {
  const router = useRouter();

  return (
    <div>
      <h2>Post</h2>
      <p>{JSON.stringify(router.query)}</p>
    </div>
  );
};

export default Post;
