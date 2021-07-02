<template>
  <h2>
    {{ "text prop with " + text }}
  </h2>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    /* eslint-disable vue/require-default-prop */
    text: {
      type: String,
    },
    /* eslint-enable vue/require-default-prop */
  },
});
</script>

<style></style>
