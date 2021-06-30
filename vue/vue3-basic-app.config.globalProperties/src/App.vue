<template>
  <h1>App Component</h1>
  <p>{{ $filter.uppercase("Hello World") }}</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style></style>
