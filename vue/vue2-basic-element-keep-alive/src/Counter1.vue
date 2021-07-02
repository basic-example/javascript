<template>
  <div>
    <h3>Counter1 Component</h3>
    <p>count: {{ count }}</p>
    <button @click="++count">increase count</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  activated() {
    console.log(arguments, "[Counter1] is activated!");
  },
  created() {
    console.log(arguments, "[Counter1] is created!");
  },
  data: () => ({
    count: 1,
  }),
  deactivated() {
    console.log(arguments, "[Counter1] is deactivated!");
  },
  mounted() {
    console.log(arguments, "[Counter1] is mounted!");
  },
});
</script>

<style></style>
