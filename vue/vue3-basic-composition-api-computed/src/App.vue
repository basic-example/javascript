<template>
  <h1>App Component</h1>
  <p>count: {{ count }}</p>
  <p>multiple count: {{ multipleCount }}</p>
  <button @click="increaseCount">increaseCount</button>
  <button @click="setCount">set count</button>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";

const count = ref(1);
const multipleCount = computed(() => {
  console.log("computed run");
  return 2 * count.value;
});
const increaseCount = () => {
  count.value++;
};
const setCount = () => {
  count.value = 10;
};

export default defineComponent({
  setup() {
    return {
      count,
      increaseCount,
      multipleCount,
      setCount,
    };
  },
});
</script>

<style></style>
