<template>
  <h1>App Component</h1>
  <SetClickEmitsBtn @click="clicked" />
  <NotSetClickEmitsBtn @click="clicked" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NotSetClickEmitsBtn from "./NotSetClickEmitsBtn.vue";
import SetClickEmitsBtn from "./SetClickEmitsBtn.vue";

export default defineComponent({
  components: {
    NotSetClickEmitsBtn,
    SetClickEmitsBtn,
  },
  methods: {
    clicked() {
      console.log("clicked in App");
    },
  },
});
</script>

<style></style>
