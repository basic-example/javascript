<template>
  <div>
    <slot :user="user" />
    <slot name="main" :user="user" />
    <slot name="sub" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data: () => ({
    user: "Lee",
  }),
});
</script>

<style></style>
