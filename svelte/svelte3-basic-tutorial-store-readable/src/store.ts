import { readable } from "svelte/store";

let count = 1;

export default readable(count, (set) => {
  const interval = setInterval(() => {
    set(count++);
  }, 1000);

  return () => {
    clearInterval(interval);
  };
});
