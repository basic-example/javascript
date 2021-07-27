<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";

  export const load: Load = () => {
    console.log("/components/Message.svelte");
    return {};
  };
</script>

<script lang="ts">
</script>

<p>Hello World</p>

<style>
</style>
