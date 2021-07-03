<template>
  <div>
    <h2>CheckboxCustom Component</h2>
    <p>prop val : {{ val }}</p>
    <input type="checkbox" @change="emitEdit" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    emitEdit(event: InputEvent) {
      this.$emit("edit", (event.target as HTMLInputElement).checked);
    },
  },
  model: {
    event: "edit",
    prop: "val",
  },
  props: {
    val: {
      default: false,
      type: Boolean,
    },
  },
});
</script>

<style></style>
