<script lang="ts">
  import Child from "./Child.svelte";

  const info = {
    name: "svelte",
    version: 3,
    website: "https://svelte.dev",
  };
</script>

<div>
  <h1>App</h1>
  <Child {...info} />
</div>

<style>
</style>
