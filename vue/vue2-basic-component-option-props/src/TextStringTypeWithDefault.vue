<template>
  <h2>
    {{ "text prop with " + text }}
  </h2>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    text: {
      default: () => "string type and default value",
      type: String,
    },
  },
});
</script>

<style></style>
