<template>
  <div>
    <h1>App Component</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

const mixin = {
  created() {
    alert(`mixin created hook event is fired!`);
  },
};

export default Vue.extend({
  mixins: [mixin],
});
</script>

<style></style>
