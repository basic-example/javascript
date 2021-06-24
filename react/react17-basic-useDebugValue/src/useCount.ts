import { Dispatch, SetStateAction, useDebugValue, useState } from "react";

const useCount = (
  inital: number
): [number, Dispatch<SetStateAction<number>>] => {
  useDebugValue(`count is ${inital} in useCount`);

  return useState<number>(inital);
};

// ----------------------------------------------------------------------------
// below alternative better short code has not eslint error.
// but it seems to have typescript error.
// ----------------------------------------------------------------------------
// const useCount = (inital: number): ReturnType<typeof useState>[number] => {
//   return useState<number>(inital);
// };

export default useCount;
