<script lang="ts">
  import Child1 from "./Child1.svelte";
  import Child2 from "./Child2.svelte";
  import Child3 from "./Child3.svelte";

  const options = [
    { name: "child1", component: Child1 },
    { name: "child2", component: Child2 },
    { name: "child3", component: Child3 },
  ];
  let selected;
</script>

<div>
  <h1>App</h1>
  <select bind:value={selected}>
    {#each options as option}
      <option value={option}>{option.name}</option>
    {/each}
  </select>
  {#if selected}
    <svelte:component this={selected.component} />
  {/if}
</div>

<style>
</style>
