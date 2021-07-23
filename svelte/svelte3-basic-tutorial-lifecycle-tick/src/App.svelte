<script lang="ts">
  import { tick } from "svelte";
  let num = 0;
  let el: HTMLDivElement;
</script>

<div>
  <h1>App</h1>
  <button
    on:click={async () => {
      num++;
      el = document.querySelector("#num");
      console.log("before await tick()", el.innerText);
      await tick();
      console.log("after await tick()", el.innerText);
    }}
  >
    increase
  </button>
  <div id="num">{num}</div>
</div>

<style>
</style>
