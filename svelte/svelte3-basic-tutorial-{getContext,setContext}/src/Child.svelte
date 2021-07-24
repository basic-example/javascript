<script lang="ts">
  import { getContext } from "svelte";

  const { message } = getContext("something");
</script>

<div>
  <h2>Child</h2>
  <p>{message}</p>
</div>

<style>
</style>
