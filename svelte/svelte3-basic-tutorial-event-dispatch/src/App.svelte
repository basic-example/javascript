<script lang="ts">
  import Child from "./Child.svelte";

  let handleMessage = (event) => {
    alert(event.detail.text);
    console.log(event);
  };
</script>

<div>
  <h1>App</h1>
  <Child on:message={handleMessage} />
</div>

<style>
</style>
