<script lang="ts">
  import Child1 from "./Child1.svelte";
  import Child2 from "./Child2.svelte";

  let show = true;
</script>

<div>
  <h1>App</h1>
  <button on:click={() => (show = !show)}>toggle</button>
  {#if show}
    <Child1 />
    <Child2 />
  {/if}
</div>

<style>
</style>
