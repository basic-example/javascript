<template>
  <div>
    <h1>App Component</h1>
    <CustomInput @focus="focused" />
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
    focused: () => {
      console.log("focus event fired");
    },
  },
});
</script>

<style></style>
