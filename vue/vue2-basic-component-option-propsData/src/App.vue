<template>
  <div>
    <h1>App Component</h1>
    <p>usually propsData option is used for testing</p>
    <p>msg: {{ msg }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    msg: {
      default: null,
      type: String,
    },
  },
});
</script>

<style></style>
