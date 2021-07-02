<template>
  <div>
    <h2>Child Component</h2>
    <button @click="turnOff">turn-off click event</button>
    <button @click="emit">emit click event</button>
    <button @click="turnOn">turn-on click event</button>
    <button @click="turnOnce">turn-once click event</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    emit() {
      this.$emit("click");
    },
    turnOff() {
      this.$off("click");
    },
    turnOn() {
      this.$on("click", this.$listeners.click as typeof Function.prototype);
    },
    turnOnce() {
      this.$once("click", this.$listeners.click as typeof Function.prototype);
    },
  },
});
</script>

<style></style>
