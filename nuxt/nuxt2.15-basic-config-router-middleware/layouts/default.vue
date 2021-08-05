<template>
  <div>
    <nav>
      <NuxtLink to="/user/account">/user/account</NuxtLink>
      <NuxtLink to="/user/profile">/user/profile</NuxtLink>
      <NuxtLink v-if="!$store.state.user" to="/login">/login</NuxtLink>
      <NuxtLink v-if="$store.state.user" to="/logout">/logout</NuxtLink>
      <NuxtLink to="/">/</NuxtLink>
    </nav>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { NuxtAppOptions } from "@nuxt/types";

export default {} as NuxtAppOptions;
</script>

<style scoped></style>
