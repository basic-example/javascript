<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";
  import Message1 from "/src/components/Message.svelte";
  import Message2 from "/src/routes/user/_Message.svelte";
  export const load: Load = ({ context }) => {
    console.log("/routes/user/index.svelte", context);
    return {
      context: {
        UserKey: true,
      },
    };
  };
</script>

<script lang="ts">
</script>

<h1>User Page</h1>
<p>parent layout's context is merged</p>
<!-- below two Message component's load function not called-->
<Message1 />
<Message2 />

<style>
</style>
