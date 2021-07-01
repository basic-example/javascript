<template>
  <div>
    <h1>App Component</h1>
    id: <input v-model="id" type="number" />
    <hr />
    {{ title || "this message will be changed when id value changed" }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      id: 1,
      title: null,
    };
  },
  watch: {
    id(next) {
      fetch(`https://jsonplaceholder.typicode.com/todos/${next}`)
        .then((response) => response.json())
        .then((json) => {
          this.$data.title = json.title;
        });
    },
  },
});
</script>

<style></style>
