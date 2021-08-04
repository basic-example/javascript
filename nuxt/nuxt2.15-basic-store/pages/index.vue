<template>
  <div>
    <h1>Root Page</h1>
    <p>Object.keys($store): {{ Object.keys($store) }}</p>
    <p>{{ $store.state.counter }}</p>
    <p>{{ $store.getters.doubleCount }}</p>
    <button @click="commitMutation">commitMutation</button>
    <button @click="dispatchAction">dispatchAction</button>
  </div>
</template>

<script lang="ts">
import { NuxtAppOptions } from "@nuxt/types";

export default {
  methods: {
    commitMutation() {
      this.$store.commit("increment", 2);
    },
    dispatchAction() {
      this.$store.dispatch("increment", 2);
    },
  },
} as NuxtAppOptions;
</script>

<style scoped></style>
