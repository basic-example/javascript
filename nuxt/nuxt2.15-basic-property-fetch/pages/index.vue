<template>
  <div>
    <h1>Root Page</h1>
    <h2>Posts</h2>
    <p>{{ posts }}</p>
    <Users />
  </div>
</template>

<script lang="ts">
import { NuxtAppOptions } from "@nuxt/types";
import Users from "../components/users.vue";

export default {
  components: {
    Users,
  },
  data: () => ({
    posts: null,
  }),
  async fetch() {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    const response = await fetch(url);
    const posts = await response.json();
    this.posts = posts.slice(0, 3);
  },
} as NuxtAppOptions;
</script>

<style scoped></style>
