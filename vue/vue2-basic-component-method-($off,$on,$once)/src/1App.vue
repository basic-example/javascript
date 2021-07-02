<template>
  <div>
    <h1>App Component</h1>
    <Child @click="clickEvent" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Child from "./Child.vue";

export default Vue.extend({
  components: { Child },
  methods: {
    clickEvent() {
      alert("clickEvent!");
    },
  },
});
</script>

<style></style>
