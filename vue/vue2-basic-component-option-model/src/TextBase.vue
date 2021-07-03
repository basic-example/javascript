<template>
  <div>
    <h2>BaseInput Component</h2>
    <p>prop value : {{ value }}</p>
    <input type="text" :value="value" @input="emitInput" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    emitInput(event: InputEvent) {
      this.$emit("input", (event.target as HTMLInputElement).value);
    },
  },
  props: {
    value: {
      default: "",
      type: String,
    },
  },
});
</script>

<style></style>
