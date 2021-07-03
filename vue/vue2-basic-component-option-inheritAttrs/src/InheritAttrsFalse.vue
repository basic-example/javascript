<template>
  <div>
    <h2>InheritAttrsFalse Component</h2>
    <p>host element has not component's attributes</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  inheritAttrs: false,
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
