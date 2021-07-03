<template>
  <div>
    <h2>Child Component</h2>
    <p>count : {{ count }}</p>
    <button @click="count++">increase count</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      count: 1,
    };
  },
});
</script>

<style></style>
