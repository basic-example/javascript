<template>
  <div>
    <h1>Root Page</h1>
    <p>renderOn: {{ renderOn }}</p>
  </div>
</template>

<script lang="ts">
import { NuxtAppOptions } from "@nuxt/types";

export default {
  data() {
    return {
      renderOn: null,
    };
  },
  fetch() {
    this.renderOn = process.server ? "server" : "client";
  },
} as NuxtAppOptions;
</script>

<style scoped></style>
