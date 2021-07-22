<script lang="ts">
  let handleClick = () => {
    alert("clicked");
  };
</script>

<div>
  <h1>App</h1>
  <!--
  preventDefault — calls event.preventDefault() before running the handler. Useful for client-side form handling, for example.

  stopPropagation — calls event.stopPropagation(), preventing the event reaching the next element

  passive — improves scrolling performance on touch/wheel events (Svelte will add it automatically where it's safe to do so)

  nonpassive — explicitly set passive: false

  capture — fires the handler during the capture phase instead of the bubbling phase ()

  once — remove the handler after the first time it runs

  self — only trigger handler if event.target is the element itself
  -->
  <button on:click|once={handleClick}> Click me </button>
</div>

<style>
</style>
