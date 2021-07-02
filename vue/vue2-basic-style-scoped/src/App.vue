<template>
  <div>
    <h1>App Component</h1>
    <NonScoped />
    <Scoped />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NonScoped from "./NonScoped.vue";
import Scoped from "./Scoped.vue";

export default Vue.extend({
  components: {
    NonScoped,
    Scoped,
  },
});
</script>

<style></style>
