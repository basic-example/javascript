<template>
  <div>
    <h1>App Component</h1>
    <Parent />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Parent from "./Parent.vue";

export default Vue.extend({
  components: {
    Parent,
  },
  provide: () => {
    return {
      text: "Hello World!",
    };
  },
});
</script>

<style></style>
