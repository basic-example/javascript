<script lang="ts">
  let user = { loggedIn: false };
  let toggle = () => {
    user.loggedIn = !user.loggedIn;
  };
</script>

<div>
  <h1>App</h1>
  {#if user.loggedIn}
    <button on:click={toggle}> Log out </button>
  {:else if !user.loggedIn}
    <button on:click={toggle}> Log in </button>
  {/if}
</div>

<style>
</style>
