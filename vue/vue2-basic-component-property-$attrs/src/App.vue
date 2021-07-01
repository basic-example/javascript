<template>
  <div>
    <h1>App Component</h1>
    <Parent a="aaa" b="bbb" c="ccc" d="ddd" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Parent from "./Parent.vue";

export default Vue.extend({
  components: {
    Parent,
  },
});
</script>

<style></style>
