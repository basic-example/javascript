import React, { useState } from "react";

export default function InvalidCounter(): JSX.Element {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  return (
    <div>
      <span>Count: {count}</span>
      <button
        onClick={() => {
          increase();
        }}
      >
        increase
      </button>
    </div>
  );
}
