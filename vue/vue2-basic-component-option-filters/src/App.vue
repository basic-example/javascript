<template>
  <div>
    <h1>App Component</h1>
    <p>{{ "abcd" | capitalize }}</p>
    <Child :title="'hello world!' | capitalize" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Child from "./Child.vue";

export default Vue.extend({
  components: {
    Child,
  },
  filters: {
    capitalize: (val: string) => val.toUpperCase(),
  },
});
</script>

<style></style>
