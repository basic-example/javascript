<script lang="ts">
  import Child from "./Child.svelte";

  let things = [
    { id: "abcd", name: "apple" },
    { id: "bcde", name: "banana" },
    { id: "cdef", name: "carrot" },
    { id: "defg", name: "doughnut" },
    { id: "efgh", name: "egg" },
  ];

  let clickEvent = () => {
    things = things.slice(1);
  };
</script>

<div>
  <h1>App</h1>
  <h2>not keyed list</h2>
  <ul>
    {#each things as { name }, index}
      <Child {name} />
    {/each}
  </ul>
  <hr />
  <h2>keyed list</h2>
  <ul>
    {#each things as thing (thing.id)}
      <Child name={thing.name} />
    {/each}
  </ul>
  <button on:click={clickEvent}>Remove first thing</button>
</div>

<style>
</style>
