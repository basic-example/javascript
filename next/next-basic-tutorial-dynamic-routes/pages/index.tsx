import React from "react";

export default function RootPage(): JSX.Element {
  return (
    <div>
      <h1>Root Page</h1>
      <nav>
        <p>
          <a href="/users/1">/users/1</a>
        </p>
        <p>
          <a href="/posts">/posts</a>
        </p>
        <p>
          <a href="/posts/aaa">/posts/aaa</a>
        </p>
        <p>
          <a href="/files/aaa/bbb/ccc">/files/aaa/bbb/ccc</a>
        </p>
      </nav>
      <hr />
      <nav>
        <p>
          <a href="/api/users/1">/api/users/1</a>
        </p>
        <p>
          <a href="/api/posts">/api/posts</a>
        </p>
        <p>
          <a href="/api/posts/aaa">/api/posts/aaa</a>
        </p>
        <p>
          <a href="/api/files/aaa/bbb/ccc">/api/files/aaa/bbb/ccc</a>
        </p>
      </nav>
    </div>
  );
}
