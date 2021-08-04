<template>
  <div>
    <h1>Throw Error</h1>
  </div>
</template>

<script lang="ts">
import { NuxtAppOptions } from "@nuxt/types";

export default {
  created() {
    throw new Error("something wrong.");
  },
} as NuxtAppOptions;
</script>

<style scoped></style>
