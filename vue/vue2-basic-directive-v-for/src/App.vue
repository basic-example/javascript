<template>
  <div>
    <h1>App Component</h1>
    <ol>
      <li v-for="todo in todos" :key="todo.text">
        {{ todo.text }}
      </li>
    </ol>
    <ol>
      <template v-for="todo in todos">
        <li :key="todo.text">
          {{ todo.text }}
        </li>
      </template>
    </ol>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    todos: [
      { text: "Learn JavaScript" },
      { text: "Learn Vue" },
      { text: "Build something awesome" },
    ],
  }),
});
</script>

<style></style>
