<script lang="ts">
  import count from "./store";

  let increment = () => {
    count.update((n) => n + 1);
  };
  count.subscribe((n) => {
    console.log(`[Child1] ${n}`);
  });
</script>

<div>
  <h2>Child1</h2>
  <button on:click={increment}>+</button>
</div>

<style>
</style>
