<template>
  <h1>App Component</h1>
  <p>Count: {{ data.count }}</p>
  <button @click="increase">increase button</button>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  setup() {
    let data = reactive({ count: 0 });

    return {
      data,
      increase: () => {
        data.count++;
      },
    };
  },
});
</script>

<style></style>
