import { Plugin } from "@nuxt/types";

export default ((context, inject) => {
  inject("serverApi", async (path: string) => {
    const response = await fetch(`http://jsonplaceholder.typicode.com/${path}`);
    const data = await response.json();

    return data;
  });
}) as Plugin;
