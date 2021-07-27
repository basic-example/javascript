<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";
  export const load: Load = ({ context }) => {
    console.log("/routes/index.svelte", context);
    return {
      context: {
        RootKey: true,
      },
    };
  };
</script>

<script lang="ts">
</script>

<h1>App Page</h1>
<nav>
  <p><a href="/user">/user</a></p>
</nav>

<style>
</style>
