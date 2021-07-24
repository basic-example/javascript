<script lang="ts">
  let y = 0;
</script>

<svelte:body
  on:click={() => {
    alert("clicked");
  }} />
<div>
  <h1>App</h1>
  <p>please click document.body</p>
</div>

<style>
</style>
