<template>
  <div>
    <h1>Root Page</h1>
    <h2>Users</h2>
    <p>{{ users }}</p>
  </div>
</template>

<script lang="ts">
import { NuxtAppOptions } from "@nuxt/types";

export default {
  data() {
    return {
      users: null,
    };
  },
  async fetch() {
    this.users = await this.$serverApi("users");
  },
} as NuxtAppOptions;
</script>

<style scoped></style>
