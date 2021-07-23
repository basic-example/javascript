<script lang="ts">
  import { onMount } from "svelte";
  let message = "";
  onMount(() => {
    message = "Hello World";
  });
</script>

<div>
  <h1>App</h1>
  <p>{message}</p>
</div>

<style>
</style>
