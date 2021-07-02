<template>
  <div>
    <h3>Child Component</h3>
    <p>{{ $parent.foo }}</p>
    <button @click="$parent.bar">run $parent.bar method</button>
    <Leaf />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Leaf from "./Leaf.vue";

export default Vue.extend({
  components: {
    Leaf,
  },
});
</script>

<style></style>
