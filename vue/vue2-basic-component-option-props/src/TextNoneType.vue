<template>
  <h2>
    {{ "text prop with " + text }}
  </h2>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  // eslint-disable-next-line vue/require-prop-types
  props: ["text"],
});
</script>

<style></style>
