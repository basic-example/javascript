<script lang="ts">
  let numbers = [1, 2, 3, 4];
  let addNumber = () => {
    numbers.push(numbers.length + 1);
    numbers = numbers;
  };
</script>

<div>
  <h2>Reactivity2</h2>
  <button on:click={addNumber}>Add a number</button>
  <p>{numbers}</p>
</div>

<style>
</style>
