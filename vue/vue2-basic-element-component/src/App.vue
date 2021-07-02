<template>
  <div>
    <h1>App Component</h1>
    <component :is="current" />
    <select v-model="current">
      <option value="Child1">Child1</option>
      <option value="Child2">Child2</option>
      <option value="Child3">Child3</option>
    </select>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Child1 from "./Child1.vue";
import Child2 from "./Child2.vue";
import Child3 from "./Child3.vue";

export default Vue.extend({
  components: {
    Child1,
    Child2,
    Child3,
  },
  data: () => ({
    current: "Child1",
  }),
});
</script>

<style></style>
