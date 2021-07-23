<script lang="ts">
  let html = "Hello <span style='color:red'>World</span>";
</script>

<div>
  <h1>App</h1>
  <div contenteditable="false" bind:innerHTML={html} />
</div>

<style>
</style>
