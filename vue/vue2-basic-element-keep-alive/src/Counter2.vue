<template>
  <div>
    <h3>Counter2 Component</h3>
    <p>count: {{ count }}</p>
    <button @click="++count">increase count</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  activated() {
    console.log(arguments, "[Counter2] is activated!");
  },
  created() {
    console.log(arguments, "[Counter2] is created!");
  },
  data: () => ({
    count: 2,
  }),
  deactivated() {
    console.log(arguments, "[Counter2] is deactivated!");
  },
  mounted() {
    console.log(arguments, "[Counter2] is mounted!");
  },
});
</script>

<style></style>
