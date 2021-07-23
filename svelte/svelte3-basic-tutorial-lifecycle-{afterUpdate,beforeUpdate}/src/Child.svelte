<script lang="ts">
  import { afterUpdate, beforeUpdate } from "svelte";

  let childNum = 0;
  export let propNum;

  afterUpdate(() => {
    console.log("[Child] afterUpdate");
  });

  beforeUpdate(() => {
    console.log("[Child] beforeUpdate");
  });
</script>

<div>
  <h2>Child</h2>
  <button on:click={() => childNum++}>increase childNum</button>
  <button on:click={() => propNum++}>increase propNum</button>
  <p>childNum: {childNum}</p>
  <p>propNum : {propNum}</p>
</div>

<style>
</style>
