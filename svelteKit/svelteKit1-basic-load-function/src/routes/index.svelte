<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";
  export const load: Load = ({
    // page: {
    // 	host: string;
    // 	path: string;
    // 	params: PageParams;
    // 	query: URLSearchParams;
    // };
    // fetch: (info: RequestInfo, init?: RequestInit) => Promise<Response>;
    // session: Session;
    // context: Context;
    page,
    fetch,
    session,
    context,
  }) => {
    console.log(page, fetch, session, context);

    return {
      // status?: number;
      // error?: string | Error;
      // redirect?: string;
      // props?: Props;
      // context?: Context;
      // maxage?: number;
      props: {
        message: "Hello World",
      },
    };
  };
</script>

<script lang="ts">
  export let message;
</script>

<h1>App</h1>
<p>{message}</p>

<style>
</style>
