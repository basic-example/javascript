<template>
  <div>
    <h2>Users</h2>
    <User id="1" />
    <User id="2" />
    <User id="3" />
  </div>
</template>

<script lang="ts">
import { NuxtAppOptions } from "@nuxt/types";
import User from "./user.vue";

export default {
  components: {
    User,
  },
} as NuxtAppOptions;
</script>

<style scoped></style>
