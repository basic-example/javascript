<template>
  <div>
    <h2>Parent Component</h2>
    <p>{{ $attrs }}</p>
    <p v-bind="$attrs">check this element attributes</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    a: {
      default: null,
      type: String,
    },
    b: {
      default: null,
      type: String,
    },
  },
});
</script>

<style></style>
