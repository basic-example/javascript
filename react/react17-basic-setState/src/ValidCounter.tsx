import React, { useState } from "react";

export default function ValidCounter(): JSX.Element {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((count) => {
      return count + 1;
    });
    setCount((count) => {
      return count + 1;
    });
    setCount((count) => {
      return count + 1;
    });
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
