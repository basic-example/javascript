<template>
  <div>
    <h1>Root Page</h1>
    <NuxtLink to="/about">about</NuxtLink>
  </div>
</template>

<script lang="ts">
import { NuxtAppOptions } from "@nuxt/types";

export default {
  layout: "header",
} as NuxtAppOptions;
</script>

<style scoped></style>
