<script lang="ts">
  let m = { x: 0, y: 0 };
</script>

<div>
  <h1>App</h1>
  <div on:mousemove={(e) => (m = { x: e.clientX, y: e.clientY })}>
    The mouse position is {m.x} x {m.y}
  </div>
</div>

<style>
</style>
