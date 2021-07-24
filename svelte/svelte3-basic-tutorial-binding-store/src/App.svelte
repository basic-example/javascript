<script lang="ts">
  import { derived, writable } from "svelte/store";

  const name = writable("World");
  const message = derived(name, (name) => `Hello ${name}`);
</script>

<div>
  <h1>App</h1>
  <p>name: {$name}</p>
  <p>message: {$message}</p>
</div>

<style>
</style>
