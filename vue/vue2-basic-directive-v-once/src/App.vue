<template>
  <div>
    <h1>App Component</h1>
    <p>count : {{ count }}</p>
    <button @click="increase">increase</button>
    <hr />
    <Child :count="count" />
    <!-- not re-render -->
    <Child v-once :count="count" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Child from "./Child.vue";

export default Vue.extend({
  components: {
    Child,
  },
  data: () => ({
    count: 1,
  }),
  methods: {
    increase() {
      ++this.count;
    },
  },
});
</script>

<style></style>
