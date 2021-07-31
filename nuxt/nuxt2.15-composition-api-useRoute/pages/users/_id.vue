<template>
  <div>
    <h1>User</h1>
    <p>ID: {{ id }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, useRoute, computed } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const route = useRoute();
    const id = computed(() => route.value.params.id);

    return {
      id,
    };
  },
});
</script>

<style scoped></style>
