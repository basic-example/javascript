<template>
  <h1>App Component</h1>
  <p>Count: {{ count }}</p>
  <button @click="increase">increase</button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    let count = ref(0);

    return {
      count,
      increase: () => {
        count.value++;
      },
    };
  },
});
</script>

<style></style>
