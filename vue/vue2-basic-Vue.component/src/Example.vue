<template>
  <div>
    <h2>Example using {{ method }}</h2>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    method: {
      default: null,
      type: String,
    },
  },
});
</script>

<style></style>
