<template>
  <div>
    <h2>Child Component</h2>
    <button @click="$emit('custom-event', 'message from child component')">
      button
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style></style>
