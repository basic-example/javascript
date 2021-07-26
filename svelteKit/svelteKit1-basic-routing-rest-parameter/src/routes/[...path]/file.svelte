<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";

  export const load: Load = ({ page, fetch, session, context }) => {
    return {
      props: {
        params: page.params,
      },
    };
  };
</script>

<script lang="ts">
  export let params;
</script>

<h1>[...Path] File</h1>
<p>params: {JSON.stringify(params)}</p>

<style>
</style>
