<template>
  <div>
    <h1>Root Page</h1>
    <p>Counter: {{ state.counter }}</p>
    <p>Todo List: {{ JSON.stringify(state.todo.list) }}</p>
    <button @click="increaseCount">increaseCount</button>
    <button @click="addTodo">addTodo</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext, useStore } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const context = useContext();
    const store = useStore();

    return {
      increaseCount: () => {
        context.store.dispatch("increment", 2);
        store.dispatch("increment", 3);
      },
      addTodo: () => {
        context.store.dispatch("todo/add", "coding...");
      },
      state: store.state,
    };
  },
});
</script>

<style scoped></style>
