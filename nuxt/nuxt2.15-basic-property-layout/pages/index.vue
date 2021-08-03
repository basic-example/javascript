<template>
  <div>
    <h1>Root Page</h1>
    <NuxtLink to="/about">about</NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue, { ComponentOptions } from "vue";

export default {
  layout: "header",
} as ComponentOptions<Vue>;
</script>

<style scoped></style>
