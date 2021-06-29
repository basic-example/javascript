<template>
  <h2>FlushSync Component</h2>
  <p>Count: {{ count }}</p>
  <p id="toggle">toggle: {{ toggle }}</p>
  <button @click="dispatchWatch">dispatch watch</button>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";

const count = ref(0);
const toggle = ref(true);

export default defineComponent({
  setup() {
    watch(toggle, (next, prev) => {
      console.log("1 watch toggle", next, prev);
      count.value = count.value + 1;
    });
    watch(toggle, (next, prev) => {
      console.log("2 watch toggle", next, prev);
      count.value = count.value + 1;
    });
    watch(
      toggle,
      (next, prev) => {
        console.log(
          "post watch toggle",
          next,
          prev,
          document.getElementById("toggle")?.innerHTML
        );
        count.value = count.value + 1;
      },
      {
        flush: "post",
      }
    );
    watch(
      toggle,
      (next, prev) => {
        console.log(
          "pre watch toggle",
          next,
          prev,
          document.getElementById("toggle")?.innerHTML
        );
        count.value = count.value + 1;
      },
      {
        flush: "pre",
      }
    );

    return {
      count,
      dispatchWatch: () => {
        toggle.value = !toggle.value;
      },
      toggle,
    };
  },
});
</script>

<style>
button {
  display: block;
}
</style>
