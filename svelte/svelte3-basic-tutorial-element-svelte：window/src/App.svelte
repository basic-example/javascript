<script lang="ts">
  let y = 0;
</script>

<svelte:window
  on:click={() => {
    alert("clicked");
  }}
  bind:scrollY={y}
/>
<!--
The list of properties you can bind to is as follows:
- innerWidth
- innerHeight
- outerWidth
- outerHeight
- scrollX
- scrollY
- online — an alias for window.navigator.onLine
-->
<div>
  <h1>App</h1>
  <p>please click browser window~!</p>
</div>

<style>
</style>
