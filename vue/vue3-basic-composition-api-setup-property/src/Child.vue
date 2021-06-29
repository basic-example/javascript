<template>
  <div v-bind="$attrs">
    <h2>Child Component</h2>
    <slot name="header" />
    <slot />
    <button @click="emitTestEvent">test event fire</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, isReactive } from "vue";

export default defineComponent({
  emits: ["test"],
  props: {
    c: {
      default: null,
      type: String,
    },
  },
  setup(props, { attrs, slots, emit }) {
    console.log(props, attrs, slots, emit);
    console.log(isReactive(props));

    return {
      emitTestEvent: () => {
        emit("test");
      },
    };
  },
});
</script>

<style></style>
