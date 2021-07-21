<script lang="ts">
  let count = 0;
  $: doubled = count * 2;
  $: if (count >= 10) {
    alert(`count is dangerously high!`);
    count = 1;
  }
  let handleClick = () => {
    count += 1;
  };
</script>

<div>
  <h1>App</h1>
  <button on:click={handleClick}>
    Clicked {count}
    {count === 1 ? "time" : "times"}
  </button>
  <p>{count} doubled is {doubled}</p>
</div>

<style>
</style>
