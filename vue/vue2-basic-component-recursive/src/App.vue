<template>
  <div>
    <h1>App Component</h1>
    <Recursive
      name="root"
      :items="{ aaa: { a1: null, a2: null }, bbb: { b1: null } }"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Recursive from "./Recursive.vue";

export default Vue.extend({
  components: {
    Recursive,
  },
});
</script>

<style></style>
