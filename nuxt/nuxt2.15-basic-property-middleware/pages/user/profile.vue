<template>
  <div>
    <h1>User Profile</h1>
    <p>Hi, {{ $store.state.user.name }}</p>
  </div>
</template>

<script lang="ts">
import { NuxtAppOptions } from "@nuxt/types";

export default {
  middleware: ["auth"],
} as NuxtAppOptions;
</script>

<style scoped></style>
