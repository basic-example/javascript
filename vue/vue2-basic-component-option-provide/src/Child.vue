<template>
  <div>
    <h3>Child Component</h3>
    <p>{{ text }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  inject: ["text"],
});
</script>

<style></style>
