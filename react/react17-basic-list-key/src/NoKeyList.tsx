import React, { FunctionComponent, useState } from "react";

type Props = Record<string, unknown>;

const NoKeyList: FunctionComponent<Props> = (): JSX.Element => {
  const [data, setData] = useState(["a", "b", "c", "d", "e"]);

  const elements = data.map((element) => {
    return (
      // eslint-disable-next-line react/jsx-key
      <li>
        <p>{element}</p>
        <input type="text" />
      </li>
    );
  });

  return (
    <div>
      <h2>No Key List (Invalid work)</h2>
      <button
        onClick={() => {
          setData(data.slice(1));
        }}
      >
        shift
      </button>
      <ul>{elements}</ul>
    </div>
  );
};

export default NoKeyList;
