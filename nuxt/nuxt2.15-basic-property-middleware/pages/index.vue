<template>
  <div>
    <h1>Root Page</h1>
    <p>{{ "login: " + ($store.state.user ? "true" : "false") }}</p>
  </div>
</template>

<script lang="ts">
import { Context, NuxtAppOptions } from "@nuxt/types";

export default {
  middleware: [
    (context: Context) => {
      console.log("anonymous middleware", Object.keys(context));
    },
  ],
} as NuxtAppOptions;
</script>

<style scoped></style>
