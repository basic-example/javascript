<script lang="ts">
  import Child from "./Child.svelte";
</script>

<div>
  <h1>App</h1>
  <Child let:hovered={activated}>
    <div class:active={activated}>
      <p>hello world</p>
    </div>
  </Child>
</div>

<style>
  .active {
    background-color: #ff3e00;
    color: white;
  }
</style>
