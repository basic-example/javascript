<script lang="ts">
  import Child from "./Child.svelte";
</script>

<div>
  <h1>App</h1>
  <Child>
    <div slot="main">main content</div>
  </Child>
</div>

<style>
</style>
