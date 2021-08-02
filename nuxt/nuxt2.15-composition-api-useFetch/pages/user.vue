<template>
  <div>
    <h1>User</h1>
    <p>user: {{ JSON.stringify(user) }}</p>
    <p>fetchState: {{ JSON.stringify(fetchState) }}</p>
    <button @click="fetchRequest">fetchRequest</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, useFetch } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const user = ref<JSONValue>(null);
    // useFetch should be used with refs and not ssrRefs
    // Else, the state would be sent from server to client "twice",
    const { fetch: fetchRequest, fetchState } = useFetch(async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${Math.floor(
          Math.random() * (10 - 1) + 1
        )}`
      );
      user.value = (await response.json()) as JSONValue;
    });
    return {
      user,
      fetchState,
      fetchRequest,
    };
  },
});
</script>

<style scoped></style>
