<template>
  <div>
    <h1>Root Page</h1>
    <p>userSSR: {{ JSON.stringify(userSSR) }}</p>
    <p>user: {{ JSON.stringify(user) }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import { userSSR, user } from "../store/user";

export default defineComponent({
  setup() {
    console.log(process.server);
    if (process.server) {
      // value of ssrRef must set in setup function.
      // otherwise value does not exist in window.__NUXT__
      userSSR.value = {
        name: "Yoo",
      };
      user.value = {
        name: "Yoo",
      };
    }
    return {
      userSSR,
      user,
    };
  },
});
</script>

<style scoped></style>
