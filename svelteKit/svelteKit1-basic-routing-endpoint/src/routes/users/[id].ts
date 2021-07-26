import type { RequestHandler } from "@sveltejs/kit";

type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONValue[]
  | { [key: string]: JSONValue };

export const get: RequestHandler = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  return {
    body: (await res.json()) as JSONValue,
  };
};
