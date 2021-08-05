<template>
  <div>
    <h1>Root Page</h1>
  </div>
</template>

<script lang="ts">
import { NuxtAppOptions } from "@nuxt/types";

export default {
  mounted() {
    window.onNuxtReady(() => {
      alert("Nuxt is ready and mounted");
    });
  },
} as NuxtAppOptions;
</script>

<style scoped></style>
