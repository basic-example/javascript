<template>
  <h3>{{ name }} Component</h3>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    name: {
      default: null,
      type: String,
    },
  },
});
</script>

<style></style>
