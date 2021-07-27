<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";

  export const load: Load = () => {
    console.log("/routes/user/_Message.svelte");
    return {};
  };
</script>

<script lang="ts">
</script>

<p>Hello World</p>

<style>
</style>
