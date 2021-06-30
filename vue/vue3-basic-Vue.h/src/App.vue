<template>
  <h1>App Component</h1>
  <Hello />
  <World />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Hello from "./Hello.vue";
import World from "./World.vue";

export default defineComponent({
  components: {
    Hello,
    World,
  },
});
</script>

<style></style>
