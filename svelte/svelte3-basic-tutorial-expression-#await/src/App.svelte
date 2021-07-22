<script lang="ts">
  let getNewPromise = () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.3) {
          reject("failed!!!");
        } else {
          resolve("success!!!");
        }
      }, 1000);
    });
    return promise;
  };

  let promise = getNewPromise();

  function clickEvent() {
    promise = getNewPromise();
  }
</script>

<div>
  <h1>App</h1>
  {#await promise}
    <p>...waiting</p>
  {:then success}
    <p>result: {success}</p>
  {:catch error}
    <p style="color: red">error: {error}</p>
  {/await}
  <button on:click={clickEvent}> set new promise </button>
</div>

<style>
</style>
