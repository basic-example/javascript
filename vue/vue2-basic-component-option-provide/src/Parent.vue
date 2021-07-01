<template>
  <div>
    <h2>Parent Component</h2>
    <Child />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Child from "./Child.vue";

export default Vue.extend({
  components: {
    Child,
  },
});
</script>

<style></style>
