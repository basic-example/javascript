<template>
  <div>
    <h1>Todo</h1>
    <p>todo: {{ JSON.stringify(todo) }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, useRoute, useAsync } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const id = useRoute().value.params.id;
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`;
    const todo = useAsync(async () => {
      console.log(`called in ${process.server ? "server" : "client"}`);
      const response = await fetch(url);
      return response.json();
    }, url);
    return {
      todo,
    };
  },
});
</script>

<style scoped></style>
