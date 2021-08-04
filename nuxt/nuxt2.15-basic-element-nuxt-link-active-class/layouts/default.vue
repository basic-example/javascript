<template>
  <div>
    <nav>
      <NuxtLink to="/">/</NuxtLink>
      <NuxtLink to="/hello">/hello</NuxtLink>
      <NuxtLink to="/hello/world">/hello/world</NuxtLink>
    </nav>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { NuxtAppOptions } from "@nuxt/types";

export default {} as NuxtAppOptions;
</script>

<style scoped>
a.nuxt-link-active {
  font-weight: bold;
  font-size: 2em;
}
a.nuxt-link-exact-active {
  color: red;
}
</style>
