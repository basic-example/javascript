<script lang="ts">
  import Parent from "./Parent.svelte";

  let handleMessage = (event) => {
    alert(event.detail.text);
    console.log(event);
  };
</script>

<div>
  <h1>App</h1>
  <Parent on:message={handleMessage} />
</div>

<style>
</style>
