import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ request, resolve }) => {
  const response = await resolve(request);

  // html string when *.svelte
  // json string when api *.ts
  console.log(response.body);

  return {
    ...response,
  };
};
