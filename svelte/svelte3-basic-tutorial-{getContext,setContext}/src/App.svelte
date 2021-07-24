<script lang="ts">
  import { setContext } from "svelte";
  import Child from "./Child.svelte";

  setContext("something", {
    message: "hello world",
  });
</script>

<div>
  <h1>App</h1>
  <Child />
</div>

<style>
</style>
