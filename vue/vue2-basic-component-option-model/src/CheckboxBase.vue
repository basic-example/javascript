<template>
  <div>
    <h2>CheckboxBase Component</h2>
    <p>prop value : {{ value }}</p>
    <input type="checkbox" @click="emitChange" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    emitChange(event: InputEvent) {
      this.$emit("input", (event.target as HTMLInputElement).checked);
    },
  },
  props: {
    value: {
      default: false,
      type: Boolean,
    },
  },
});
</script>

<style></style>
