<script lang="ts">
  import { onDestroy } from "svelte";

  export let callback: () => void;

  const interval = setInterval(callback, 1000);

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<div>
  <h2>Child</h2>
</div>
