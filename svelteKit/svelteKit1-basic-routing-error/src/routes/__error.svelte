<script context="module" lang="ts">
  import type { ErrorLoad } from "@sveltejs/kit";

  export const load: ErrorLoad = ({ error, status }) => {
    return {
      props: {
        title: `${status}: ${error.message}`,
      },
    };
  };
</script>

<script>
  export let title;
</script>

<h1>Root Error Page</h1>
<p>{title}</p>
