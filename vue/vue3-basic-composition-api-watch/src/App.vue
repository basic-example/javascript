<template>
  <h1>App Component</h1>
  <ReactiveArray />
  <ReactiveObject />
  <Immediate />
  <FlushAsync />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FlushAsync from "./FlushAsync.vue";
import Immediate from "./Immediate.vue";
import ReactiveArray from "./ReactiveArray.vue";
import ReactiveObject from "./ReactiveObject.vue";

export default defineComponent({
  components: {
    FlushAsync,
    Immediate,
    ReactiveArray,
    ReactiveObject,
  },
});
</script>

<style></style>
