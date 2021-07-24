<script lang="ts">
  import Child from "./Child.svelte";
</script>

<div>
  <h1>App</h1>
  <Child>
    <div slot="header">
      <p>header content</p>
    </div>
    <div slot="main">
      <p>main content</p>
    </div>
    <div slot="footer">
      <p>footer content</p>
    </div>
  </Child>
</div>

<style>
</style>
