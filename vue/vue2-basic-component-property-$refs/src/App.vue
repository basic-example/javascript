<template>
  <div>
    <h1>App Component</h1>
    <CustomInput ref="customRef" />
    <hr />
    <button @click="customInputFocus">customInputFocus</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CustomInput from "./CustomInput.vue";

export default Vue.extend({
  components: {
    CustomInput,
  },
  methods: {
    customInputFocus() {
      (
        (this as Vue).$refs.customRef as InstanceType<typeof CustomInput>
      ).inputFocus();
    },
  },
});
</script>

<style></style>
