<template>
  <div>
    <h1>App Component</h1>
    <p>Hello elements is not ignored</p>
    <Hello />
    <p>World elements is ignored</p>
    <World />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Hello from "./Hello.vue";

export default Vue.extend({
  components: {
    Hello,
  },
});
</script>

<style></style>
