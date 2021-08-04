<template>
  <div>
    <h1>Error</h1>
    <p>{{ JSON.stringify(error) }}</p>
  </div>
</template>

<script lang="ts">
import { NuxtAppOptions } from "@nuxt/types";

export default {
  props: ["error"],
  layout: "default", // or set custom layout
} as NuxtAppOptions;
</script>

<style scoped></style>
