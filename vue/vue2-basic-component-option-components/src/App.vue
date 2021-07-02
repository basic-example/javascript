<template>
  <div>
    <h1>App Component</h1>
    <CustomInput />
    <custom-input />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CustomInput from "./CustomInput.vue";

export default Vue.extend({
  components: {
    CustomInput,
  },
});
</script>

<style></style>
