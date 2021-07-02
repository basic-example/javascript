<template>
  <div>
    <h1>App Component</h1>
    <button @click="hide = !hide">reset button</button>
    <hr />
    <button @click="current = 'Counter1'">show counter1</button>
    <button @click="current = 'Counter2'">show counter2</button>
    <hr />
    <div v-if="!hide">
      <h2>with keep-alive</h2>
      <keep-alive>
        <component :is="current"></component>
      </keep-alive>
      <hr />
      <h2>without keep-alive</h2>
      <component :is="current"></component>
    </div>
    <hr />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Counter1 from "./Counter1.vue";
import Counter2 from "./Counter2.vue";

export default Vue.extend({
  components: {
    Counter1,
    Counter2,
  },
  data: () => ({
    current: "Counter1",
    hide: false,
  }),
});
</script>

<style></style>
