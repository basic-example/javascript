<script context="module" lang="ts">
  export type File = { name: string; files?: Array<File> };
</script>

<script lang="ts">
  export let files: Array<File>;
</script>

<div style="margin-left:15px">
  <h2>Folder</h2>
  {#each files as something}
    {#if something.files}
      <p>folder: {something.name}</p>
      <svelte:self files={something.files} />
    {:else}
      <p>file: {something.name}</p>
    {/if}
  {/each}
</div>

<style>
</style>
