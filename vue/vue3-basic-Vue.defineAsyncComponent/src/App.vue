<template>
  <h1>App Component</h1>
  <button @click="show = !show">toggle show</button>
  <Child v-if="show" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Child from "./Child.vue";

export default defineComponent({
  components: {
    Child,
  },
  data() {
    return {
      show: true,
    };
  },
});
</script>

<style></style>
