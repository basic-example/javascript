<template>
  <h2>Reactive Array Component</h2>
  <p>reactiveArray: {{ reactiveArray }}</p>
  <button @click="setPrimativeReactiveArray">
    set primative to reactive array
  </button>
  <button @click="setObjectReactiveArray">set object to reactive array</button>
  <button @click="pushReactiveArray">
    push some integer to reactive array
  </button>
</template>

<script lang="ts">
import { defineComponent, reactive, watch } from "vue";

const reactiveArray = reactive<Array<typeof Object.prototype>>([]);

export default defineComponent({
  setup() {
    watch(
      () => [...reactiveArray],
      (next, prev) => {
        console.log("watch () => [...reactiveArray]", next, prev);
      }
    );
    watch(
      () => reactiveArray,
      (next, prev) => {
        console.log("watch () => reactiveArray", next, prev);
      }
    );

    return {
      pushReactiveArray: () => {
        reactiveArray.push(Math.floor(Math.random() * 10));
      },
      reactiveArray,
      setObjectReactiveArray: () => {
        reactiveArray[0] = {};
      },
      setPrimativeReactiveArray: () => {
        reactiveArray[0] = 12;
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
