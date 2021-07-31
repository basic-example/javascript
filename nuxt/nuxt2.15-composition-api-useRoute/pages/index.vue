<template>
  <div>
    <h1>Root Page</h1>
    <nav>
      <p><a href="/users/1">/users/1</a></p>
      <p><a href="/users/2">/users/2</a></p>
      <p><a href="/users/3">/users/3</a></p>
    </nav>
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
