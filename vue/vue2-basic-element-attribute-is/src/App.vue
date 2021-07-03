<template>
  <div>
    <h1>App Component</h1>
    <!--
      code element is replaced to Child's host element and props is merged
    -->
    <code is="Child" abcd="abcd"></code>
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
