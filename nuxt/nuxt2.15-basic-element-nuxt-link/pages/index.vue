<template>
  <div>
    <h1>Root Page</h1>
    <nuxt-link to="/hello">hello page</nuxt-link>
    <NuxtLink to="/world">world page</NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue, { ComponentOptions } from "vue";

export default {} as ComponentOptions<Vue>;
</script>

<style></style>
