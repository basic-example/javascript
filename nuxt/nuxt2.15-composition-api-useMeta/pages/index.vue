<template>
  <div>
    <h1>Root Page</h1>
    <button @click="setTitle">setTitle(error)</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, useMeta } from "@nuxtjs/composition-api";

export default defineComponent({
  head: {},
  setup() {
    // it works
    useMeta().title.value = "My Custom Title1";
    // it works. equivalent to the above
    useMeta({ title: "My Custom Title2" });

    return {
      setTitle: () => {
        // it does not work. because it called outside of component
        useMeta().title.value = "My Custom Title1";
      },
    };
  },
});
</script>

<style scoped></style>
