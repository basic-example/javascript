<script lang="ts">
  let count = 0;
  let incrementCount = () => {
    count += 1;
  };
</script>

<div>
  <h1>App</h1>
  <button on:click={incrementCount}>
    Clicked {count}
    {count === 1 ? "time" : "times"}
  </button>
</div>

<style>
</style>
