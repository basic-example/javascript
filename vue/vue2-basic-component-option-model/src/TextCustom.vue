<template>
  <div>
    <h2>CustomInput Component</h2>
    <p>prop val : {{ val }}</p>
    <input type="text" :value="val" @input="emitEdit" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    emitEdit(event: InputEvent) {
      this.$emit("edit", (event.target as HTMLInputElement).value);
    },
  },
  model: {
    event: "edit", // value sent from child component to parent component
    prop: "val", // value received from parent component to child component
  },
  props: {
    val: {
      default: "",
      type: String,
    },
  },
});
</script>

<style></style>
