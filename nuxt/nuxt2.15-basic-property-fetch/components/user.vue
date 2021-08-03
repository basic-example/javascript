<template>
  <div>
    <h3>User {{ id }}</h3>
    <p>{{ user }}</p>
  </div>
</template>

<script lang="ts">
import { NuxtAppOptions } from "@nuxt/types";

export default {
  props: {
    id: {
      type: String,
      default: null,
    },
  },
  data: () => ({
    user: null,
  }),
  async fetch() {
    const url = `https://jsonplaceholder.typicode.com/users/${this.id}`;
    const response = await fetch(url);
    const user = await response.json();
    this.user = user;
  },
} as NuxtAppOptions;
</script>

<style scoped></style>
