import type { RequestHandler } from "@sveltejs/kit";

type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONValue[]
  | { [key: string]: JSONValue };

export const get: RequestHandler = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);

  return {
    body: (await res.json()) as JSONValue,
  };
};
