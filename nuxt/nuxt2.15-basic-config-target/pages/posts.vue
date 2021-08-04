<template>
  <div>
    <h1>Posts</h1>
    <p>{{ posts }}</p>
  </div>
</template>

<script lang="ts">
import { NuxtAppOptions } from "@nuxt/types";

export default {
  data: () => ({
    posts: null,
  }),
  async fetch() {
    // does not called after nuxt generate
    const url = `https://jsonplaceholder.typicode.com/posts`;
    const response = await fetch(url);

    this.posts = await response.json();
  },
} as NuxtAppOptions;
</script>

<style scoped></style>
