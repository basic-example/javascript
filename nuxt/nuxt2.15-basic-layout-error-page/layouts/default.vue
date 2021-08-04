<template>
  <div>
    <nav>
      <NuxtLink to="/">/</NuxtLink>
      <NuxtLink to="/throw-error">/throw-error</NuxtLink>
      <NuxtLink to="/xxx">/xxx</NuxtLink>
    </nav>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { NuxtAppOptions } from "@nuxt/types";

export default {} as NuxtAppOptions;
</script>

<style scoped></style>
