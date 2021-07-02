<template>
  <div>
    <h1>App Component</h1>
    <p v-if="shown">show me</p>
    <p v-if="hidden">hide me</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    hidden: false,
    shown: true,
  }),
});
</script>

<style></style>
