<template>
  <div>
    <h2>SetEmitsBtn &lt;&lt; click for compare</h2>
    <button @click="btnClick">button</button>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["click"],
  methods: {
    btnClick() {
      console.log("clicked in SetEmitsBtn");
    },
  },
});
</script>

<style></style>
