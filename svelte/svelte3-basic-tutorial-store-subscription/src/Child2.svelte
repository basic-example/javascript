<script lang="ts">
  import { onDestroy } from "svelte";
  import count from "./store";

  let increment = () => {
    count.update((n) => n + 1);
  };
  let unsubscribe = count.subscribe((n) => {
    console.log(`[Child2] ${n}`);
  });
  onDestroy(unsubscribe);
</script>

<div>
  <h2>Child2</h2>
  <button on:click={increment}>+</button>
</div>

<style>
</style>
