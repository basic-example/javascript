<script lang="ts">
  let isHover;

  let enter = () => {
    isHover = true;
  };

  let leave = () => {
    isHover = false;
  };
</script>

<div>
  <h2>Child</h2>
  <div on:mouseenter={enter} on:mouseleave={leave}>
    <slot hovered={isHover} />
  </div>
</div>

<style>
</style>
