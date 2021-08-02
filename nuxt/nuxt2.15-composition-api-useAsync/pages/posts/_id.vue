<template>
  <div>
    <h1>Post</h1>
    <p>post: {{ JSON.stringify(post) }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, useRoute, useAsync } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const id = useRoute().value.params.id;
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const post = useAsync(async () => {
      console.log(`called in ${process.server ? "server" : "client"}`);
      const response = await fetch(url);
      return response.json();
    });
    return {
      post,
    };
  },
});
</script>

<style scoped></style>
