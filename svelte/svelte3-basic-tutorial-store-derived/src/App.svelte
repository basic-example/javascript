<script lang="ts">
  import { derived, writable } from "svelte/store";

  const count = writable(0);

  let increment = () => {
    count.update((n) => n + 1);
  };
  count.subscribe((n) => {
    alert(`count:${n}`);
  });
  const doubleCount = derived(count, (n) => n * 2);
  doubleCount.subscribe((n) => {
    alert(`doubleCount:${n}`);
  });
</script>

<div>
  <h1>App</h1>
  <button on:click={increment}>+</button>
</div>

<style>
</style>
