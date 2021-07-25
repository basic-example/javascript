<script lang="ts">
  import Child from "./Child.svelte";
  let show = true;
</script>

<div>
  <h1>App</h1>
  <button
    on:click={() => {
      show = !show;
    }}
  >
    toggle
  </button>
  {#if show}
    <Child />
  {/if}
</div>

<style>
</style>
