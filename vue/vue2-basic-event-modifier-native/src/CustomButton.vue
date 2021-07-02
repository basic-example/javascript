<template>
  <div>
    <h2>CustomButton &lt;&lt; click for check</h2>
    <button @click="customClick">button</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    customClick() {
      console.log("clicked in CustomButton");
      if (this.triggerEmit) {
        this.$emit("click");
        this.$emit("click2");
      }
    },
  },
  props: {
    triggerEmit: {
      type: Boolean,
    },
  },
});
</script>

<style></style>
