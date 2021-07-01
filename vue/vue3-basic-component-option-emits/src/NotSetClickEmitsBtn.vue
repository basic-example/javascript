<template>
  <div>
    <h2>NotSetEmitsBtn &lt;&lt; click for compare</h2>
    <button @click="btnClick">button</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    btnClick() {
      console.log("clicked in NotSetEmitsBtn");
    },
  },
});
</script>

<style></style>
