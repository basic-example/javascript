<template>
  <div>
    <h1>App Component</h1>
    <Example>
      <template #header>
        <h2>header content</h2>
      </template>
      <template>
        <p>main content</p>
      </template>
      <template #footer>
        <p>footer content</p>
      </template>
      <template #aaa="{}">
        <p>aaa</p>
      </template>
    </Example>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Example from "./Example.vue";

export default Vue.extend({
  components: {
    Example,
  },
});
</script>

<style></style>
