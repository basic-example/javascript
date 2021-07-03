<template>
  <div>
    <h2>InheritAttrsTrue Component</h2>
    <p>host element has component's attributes(c="ccc" d="ddd")</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  inheritAttrs: true,
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
