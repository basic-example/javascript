<script lang="ts">
  let m = { x: 0, y: 0 };
  let handleMousemove = (event) => {
    m.x = event.clientX;
    m.y = event.clientY;
  };
</script>

<div>
  <h1>App</h1>
  <div on:mousemove={handleMousemove}>
    The mouse position is {m.x} x {m.y}
  </div>
</div>

<style>
</style>
