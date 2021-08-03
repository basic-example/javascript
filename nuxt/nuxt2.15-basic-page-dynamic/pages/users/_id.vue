<template>
  <div>
    <h1>User</h1>
    <p>ID: {{ $route.params.id }}</p>
  </div>
</template>

<script lang="ts">
import Vue, { ComponentOptions } from "vue";

export default {} as ComponentOptions<Vue>;
</script>

<style scoped></style>
