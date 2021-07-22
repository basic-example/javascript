<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let sayHello = () => {
    dispatch("message", {
      text: "Hello!",
    });
  };
</script>

<div>
  <h2>Child</h2>
  <button on:click={sayHello}>click button</button>
</div>

<style>
</style>
