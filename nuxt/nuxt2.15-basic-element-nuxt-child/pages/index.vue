<template>
  <div>
    <h1>Root Page</h1>
    <nav>
      <NuxtLink to="/user/account">/user/account</NuxtLink>
      <NuxtLink to="/post/recently">/post/recently</NuxtLink>
    </nav>
  </div>
</template>

<script lang="ts">
import { NuxtAppOptions } from "@nuxt/types";

export default {} as NuxtAppOptions;
</script>

<style scoped></style>
