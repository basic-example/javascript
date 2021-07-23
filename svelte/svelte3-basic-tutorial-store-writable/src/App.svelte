<script lang="ts">
  import { writable } from "svelte/store";

  const count = writable(0);

  let decrement = () => {
    count.update((n) => n - 1);
  };
  let increment = () => {
    count.update((n) => n + 1);
  };
  let reset = () => {
    count.set(0);
  };
  count.subscribe((n) => {
    alert(n);
  });
</script>

<div>
  <h1>App</h1>
  <button on:click={increment}>+</button>
  <button on:click={decrement}>-</button>
  <button on:click={reset}>reset</button>
</div>

<style>
</style>
