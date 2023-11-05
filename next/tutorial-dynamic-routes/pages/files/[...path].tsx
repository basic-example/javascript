import { useRouter } from "next/router";
import React from "react";

const File = (): JSX.Element => {
  const router = useRouter();

  return (
    <div>
      <h2>File</h2>
      <p>{JSON.stringify(router.query)}</p>
    </div>
  );
};

export default File;
