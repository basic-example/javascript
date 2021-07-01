<template>
  <div>
    <h2>Child Component</h2>
    <p>{{ title }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    title: {
      default: "",
      type: String,
    },
  },
});
</script>

<style></style>
