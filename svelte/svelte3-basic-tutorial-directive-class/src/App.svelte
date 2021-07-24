<script lang="ts">
  let color = "blue";
  let align = "center";
  let blue = true;
</script>

<div>
  <h1>App</h1>
  <p class={color === "blue" ? "blue" : "red"}>blue</p>
  <p class={align === "center" ? "text-center" : "text-left"}>center</p>
  <p class:blue={color === "blue"}>blue</p>
  <p class:text-center={align === "center"}>center</p>
  <p class:blue>blue</p>
</div>

<style>
  .text-center {
    text-align: center;
  }
  .text-left {
    text-align: left;
  }
  .red {
    color: red;
  }
  .blue {
    color: blue;
  }
</style>
