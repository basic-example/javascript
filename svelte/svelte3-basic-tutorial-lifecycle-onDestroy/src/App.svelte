<script lang="ts">
  import Child from "./Child.svelte";
  let isStarted = false;
  let second = 0;
</script>

<div>
  <h1>App</h1>
  <button on:click={() => (isStarted = !isStarted)}>toggle</button>
  <p>second: {second}</p>
  {#if isStarted}
    <Child
      callback={() => {
        second += 1;
      }}
    />
  {/if}
</div>

<style>
</style>
