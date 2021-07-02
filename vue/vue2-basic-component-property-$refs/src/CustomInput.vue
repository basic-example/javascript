<template>
  <div>
    <h2>Custom Input Component</h2>
    <input ref="abcd" type="text" />
    <hr />
    <button @click="inputFocus">inputFocus</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    inputFocus(): void {
      ((this as Vue).$refs.abcd as HTMLInputElement).focus();
    },
  },
});
</script>

<style></style>
