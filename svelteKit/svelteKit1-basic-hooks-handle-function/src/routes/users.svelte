<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";

  type JSONValue =
    | string
    | number
    | boolean
    | null
    | JSONValue[]
    | { [key: string]: JSONValue };

  export const load: Load = async ({ fetch }) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);

    return {
      props: {
        users: (await response.json()) as JSONValue,
      },
    };
  };
</script>

<script lang="ts">
  export let users;
</script>

<h1>Users</h1>
<p>{JSON.stringify(users)}</p>

<style>
</style>
