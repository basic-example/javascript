<template>
  <div>
    <h1>App Component</h1>
    <component :is="cmp" abcd="ffff" />
    <!-- like vue2 :is attributes -->
    <div v-is="cmp" abcd="ffff"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Child from "./Child.vue";

export default defineComponent({
  data: () => ({
    cmp: Child,
  }),
});
</script>

<style></style>
