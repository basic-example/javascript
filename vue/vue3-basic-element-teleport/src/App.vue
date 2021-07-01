<template>
  <h1>App Component</h1>
  <teleport to="body">
    <h2>append child to body</h2>
  </teleport>
  <teleport to="#modal">
    <h2>append child to #modal in public/index.htmnl</h2>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style></style>
