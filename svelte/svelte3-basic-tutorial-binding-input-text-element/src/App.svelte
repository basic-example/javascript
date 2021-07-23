<script lang="ts">
  let message = "hello world";
</script>

<div>
  <h1>App</h1>
  <input bind:value={message} />
  <p>{message}</p>
</div>

<style>
</style>
