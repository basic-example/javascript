<script lang="ts">
  import Child from "./Child.svelte";
</script>

<div>
  <h1>App</h1>
  <Child>
    <svelte:fragment slot="main">
      <p>hello world</p>
      <p>hello world</p>
    </svelte:fragment>
  </Child>
</div>

<style>
</style>
