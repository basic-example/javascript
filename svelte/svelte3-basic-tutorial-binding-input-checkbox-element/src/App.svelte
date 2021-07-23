<script lang="ts">
  let agreement = false;
</script>

<div>
  <h1>App</h1>
  <label>
    <input type="checkbox" bind:checked={agreement} />
    agreement
  </label>

  {#if agreement}
    <p>I am agreed</p>
  {:else}
    <p>I am disclaimed</p>
  {/if}
</div>

<style>
</style>
