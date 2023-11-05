import { useRouter } from "next/router";
import React from "react";

const User = (): JSX.Element => {
  const router = useRouter();

  return (
    <div>
      <h2>User</h2>
      <p>{JSON.stringify(router.query)}</p>
    </div>
  );
};

export default User;
