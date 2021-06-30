<template>
  <div>
    <h1>App Component</h1>
    <template v-for="(item, index) in items" :key="index">
      <p>{{ item }}</p>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      items: ["1th item", "2th item", "3th item"],
    };
  },
});
</script>

<style></style>
