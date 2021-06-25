import React, { FunctionComponent, useState } from "react";

type Props = Record<string, unknown>;

const UniqueStringKeyList: FunctionComponent<Props> = (): JSX.Element => {
  const [data, setData] = useState(["a", "b", "c", "d", "e"]);

  const elements = data.map((element) => {
    return (
      <li key={element}>
        <p>{element}</p>
        <input type="text" />
      </li>
    );
  });

  return (
    <div>
      <h2>Unique String Key List (Valid Work)</h2>
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

export default UniqueStringKeyList;
