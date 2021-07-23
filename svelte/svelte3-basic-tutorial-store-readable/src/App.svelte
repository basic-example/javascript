<script lang="ts">
  import store from "./store";
  const unsubscribe = store.subscribe((n) => {
    const p = document.createElement("p");
    p.innerHTML = `count: ${n}`;
    document.body.appendChild(p);
  });
</script>

<div>
  <h1>App</h1>
  <button
    on:click={() => {
      unsubscribe();
    }}>stop</button
  >
</div>

<style>
</style>
