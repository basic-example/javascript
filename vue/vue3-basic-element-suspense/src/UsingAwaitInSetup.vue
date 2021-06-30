<template>
  <h2>AwaitInSetup Component</h2>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  async setup() {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve("something...");
      }, 1000);
    });

    // Be very careful using `await` inside `setup` as
    // most Composition API functions will only work
    // prior to the first `await`
    const something = await promise;

    return {
      something,
    };
  },
});
</script>

<style></style>
