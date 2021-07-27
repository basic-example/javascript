<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";
  export const load: Load = ({ page: { host, path, params, query } }) => {
    return {
      props: {
        host: host,
        path: path,
        params: params,
        query: query,
      },
    };
  };
</script>

<script lang="ts">
  export let host;
  export let path;
  export let params;
  export let query;
</script>

<h1>[...qux]</h1>
<p>host: {host}</p>
<p>path: {path}</p>
<p>params: {JSON.stringify(params)}</p>
<p>query: {query}</p>

<style>
</style>
