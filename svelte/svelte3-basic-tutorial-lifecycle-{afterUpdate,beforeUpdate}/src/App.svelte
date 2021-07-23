<script lang="ts">
  import { afterUpdate, beforeUpdate } from "svelte";
  import Child from "./Child.svelte";

  let AppNum = 0;
  let propNum = 0;

  afterUpdate(() => {
    console.log("[App] afterUpdate");
  });

  beforeUpdate(() => {
    console.log("[App] beforeUpdate");
  });
</script>

<div>
  <h1>App</h1>
  <button on:click={() => AppNum++}>increase AppNum</button>
  <button on:click={() => propNum++}>increase propNum</button>
  <p>AppNum: {AppNum}</p>
  <p>propNum: {propNum}</p>
  <Child {propNum} />
</div>

<style>
</style>
