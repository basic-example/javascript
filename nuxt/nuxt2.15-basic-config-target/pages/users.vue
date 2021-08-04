<template>
  <div>
    <h1>Users</h1>
    <p>{{ users }}</p>
  </div>
</template>

<script lang="ts">
import { NuxtAppOptions } from "@nuxt/types";

export default {
  data: () => ({
    users: null,
  }),
  async fetch() {
    // does not called after nuxt generate
    const url = `https://jsonplaceholder.typicode.com/users`;
    const response = await fetch(url);

    this.users = await response.json();
  },
} as NuxtAppOptions;
</script>

<style scoped></style>
