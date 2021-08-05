<template>
  <div>
    <h1>Login</h1>
    <button @click="login">login</button>
  </div>
</template>

<script lang="ts">
import { NuxtAppOptions } from "@nuxt/types";

export default {
  methods: {
    login() {
      this.$store.commit("setUser", { name: "Yoo" });
      this.$router.push("/");
    },
  },
} as NuxtAppOptions;
</script>

<style scoped></style>
