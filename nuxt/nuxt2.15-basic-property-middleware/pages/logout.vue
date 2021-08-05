<template>
  <div>
    <h1>Logout</h1>
  </div>
</template>

<script lang="ts">
import { NuxtAppOptions } from "@nuxt/types";

export default {
  created() {
    this.$store.commit("setUser", null);
    this.$router.push("/");
  },
} as NuxtAppOptions;
</script>

<style scoped></style>
