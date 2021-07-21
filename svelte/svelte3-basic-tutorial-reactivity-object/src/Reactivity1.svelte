<script lang="ts">
  let numbers = [1, 2, 3, 4];
  let addNumber = () => {
    numbers = [...numbers, numbers.length + 1];
  };
</script>

<div>
  <h2>Reactivity1</h2>
  <button on:click={addNumber}>Add a number</button>
  <p>{numbers}</p>
</div>

<style>
</style>
