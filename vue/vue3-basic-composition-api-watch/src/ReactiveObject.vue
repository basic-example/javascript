<template>
  <h2>ReactiveObject Component</h2>
  <p>reactiveObj.count: {{ reactiveObj.count }}</p>
  <button @click="setReactiveCount">set count to reactive count</button>
  <button @click="increaseReactiveCount">increase reactive count</button>
</template>

<script lang="ts">
import { defineComponent, reactive, watch } from "vue";

const reactiveObj = reactive({
  count: 0,
});
export default defineComponent({
  setup() {
    watch(
      () => reactiveObj.count,
      (next, prev) => {
        console.log("watch () => reactiveObj.count", next, prev);
      }
    );
    watch(
      () => ({
        count: reactiveObj.count,
      }),
      (next, prev) => {
        console.log("watch () => ({count: reactiveObj.count})", next, prev);
      }
    );
    watch(
      () => reactiveObj,
      (next, prev) => {
        console.log("watch () => reactiveObj", next, prev);
      }
    );
    return {
      increaseReactiveCount: () => {
        reactiveObj.count++;
      },
      reactiveObj,
      setReactiveCount: () => {
        reactiveObj.count = 100;
      },
    };
  },
});
</script>

<style>
button {
  display: block;
}
</style>
