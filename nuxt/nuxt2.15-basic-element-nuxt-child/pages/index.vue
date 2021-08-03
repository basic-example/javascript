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
import Vue, { ComponentOptions } from "vue";

export default {} as ComponentOptions<Vue>;
</script>

<style scoped></style>
