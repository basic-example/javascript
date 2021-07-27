<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";
  export const load: Load = ({ context }) => {
    console.log("/routes/__layout.svelte", context);
    return {
      context: {
        rootLayoutKey: true,
      },
    };
  };
</script>

<script lang="ts">
</script>

<slot />

<style>
</style>
