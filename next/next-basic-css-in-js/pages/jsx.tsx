import React from "react";
import Text from "../components/text";

export default function JsxPage(): JSX.Element {
  return (
    <div>
      <h1>JSX Page</h1>
      <p>test</p>
      <div>
        <style jsx>
          {`
            p {
              color: blue;
            }
          `}
        </style>
        <p>something</p>
        <div>
          <p>!@#$%^</p>
        </div>
        <Text />
      </div>
    </div>
  );
}
