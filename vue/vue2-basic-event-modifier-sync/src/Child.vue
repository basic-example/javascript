<template>
  <div>
    <h2>Child Component</h2>
    <p>count (child): {{ count }}</p>
    <button @click="increase">increase</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    increase() {
      this.$emit("update:count", this.count + 1);

      // below code has warn ocurred
      // this.count++;
      // this.$emit("update:count", this.count + 1);
    },
  },
  props: {
    count: {
      default: null,
      type: Number,
    },
  },
});
</script>

<style></style>
