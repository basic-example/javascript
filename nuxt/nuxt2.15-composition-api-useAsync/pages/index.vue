<template>
  <div>
    <h1>Root Page</h1>
    <p>when start with /posts/xxx</p>
    <p>/posts/xxx link does not work properly(not keyed function)</p>
    <p>/todos/xxx link does work properly(keyed function)</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
