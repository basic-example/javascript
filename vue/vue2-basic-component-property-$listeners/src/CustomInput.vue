<template>
  <div>
    <h2>Custom Input Component</h2>
    <input type="text" v-on="{ ...$listeners, ...{ input: inputted } }" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    inputted: () => {
      console.log("input event fired");
    },
  },
});
</script>

<style></style>
