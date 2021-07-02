<template>
  <div>
    <h2>Parent Component</h2>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    foo: "aaa",
  }),
  methods: {
    bar: () => {
      alert("Parent's bar method");
    },
  },
});
</script>

<style></style>
