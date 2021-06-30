<template>
  <div>
    <h1>App Component</h1>
    <Example>
      <template #header>
        <h2>header content</h2>
      </template>
      <template #default="{ user: person }">
        <p>main {{ person }} content</p>
      </template>
      <template #footer>
        <p>footer content</p>
      </template>
    </Example>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Example from "./Example.vue";

export default defineComponent({
  components: {
    Example,
  },
});
</script>

<style></style>
