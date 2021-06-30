<template>
  <div>
    <h2>Child Component</h2>
    <p>count : {{ count }}</p>
    <button @click="count++">increase count</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

/* eslint-disable vue/order-in-components */
export default defineComponent({
  beforeCreate() {
    console.log("child beforeCreate");
  },
  beforeMount() {
    console.log("child beforeMount");
  },
  beforeUnmount() {
    console.log("child beforeUnmount");
  },
  beforeUpdate() {
    console.log("child beforeUpdate");
  },
  created() {
    console.log("child created");
  },
  data() {
    return {
      count: 1,
    };
  },
  mounted() {
    console.log("child mounted");
  },
  unmount() {
    console.log("child unmount");
  },
  updated() {
    console.log("child updated");
  },
});
/* eslint-enable vue/order-in-components */
</script>

<style></style>
