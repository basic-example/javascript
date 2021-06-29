<template>
  <h2>Immediate Component</h2>
  <p>RefCount: {{ refCount }}</p>
  <button @click="increaseRefCount">increase ref count</button>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";

const refCount = ref(0);

export default defineComponent({
  setup() {
    watch(refCount, (next, prev) => {
      console.log("watch refCount", next, prev);
    });
    watch(
      refCount,
      (next, prev) => {
        console.log("immediate watch refCount", next, prev);
      },
      {
        immediate: true,
      }
    );

    return {
      increaseRefCount: () => {
        refCount.value++;
      },
      refCount,
    };
  },
});
</script>

<style>
button {
  display: block;
}
</style>
