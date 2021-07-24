<script lang="ts">
</script>

<div>
  <h2>Child</h2>
  <slot name="something" />
  <slot name="main" />
  <p>$$slots.something: {$$slots.something}</p>
  <p>$$slots.main: {$$slots.main}</p>
</div>

<style>
</style>
