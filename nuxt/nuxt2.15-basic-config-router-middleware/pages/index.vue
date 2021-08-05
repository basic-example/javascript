<template>
  <div>
    <h1>Root Page</h1>
    <p>{{ "login: " + ($store.state.user ? "true" : "false") }}</p>
  </div>
</template>

<script lang="ts">
import { NuxtAppOptions } from "@nuxt/types";

export default {} as NuxtAppOptions;
</script>

<style scoped></style>
