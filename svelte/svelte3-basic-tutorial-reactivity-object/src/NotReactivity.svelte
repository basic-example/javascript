<script lang="ts">
  let numbers = [1, 2, 3, 4];
  let addNumber = () => {
    numbers.push(numbers.length);
  };
</script>

<div>
  <h2>Not Reactivity</h2>
  <button on:click={addNumber}>Add a number</button>
  <p>{numbers}</p>
</div>

<style>
</style>
