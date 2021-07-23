<script lang="ts">
  let selected = null;
  let selectedList = [];
  let options = ["apple", "banana", "orange"];
</script>

<div>
  <h1>App</h1>
  <select bind:value={selected}>
    <option />
    {#each options as option}
      <option>{option}</option>
    {/each}
  </select>
  <p>selected: {selected}</p>
  <hr />
  <select multiple bind:value={selectedList}>
    <option />
    {#each options as option}
      <option>{option}</option>
    {/each}
  </select>
  <p>selectedList: {selectedList}</p>
</div>

<style>
</style>
