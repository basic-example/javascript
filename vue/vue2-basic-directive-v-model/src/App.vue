<template>
  <div>
    <h1>App Component</h1>
    <p>{{ message }}</p>
    <input v-model="message" />
    <input v-model="message" />
    <input :value="message" @input="mesage = $event.target.value" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    message: "inital message",
  }),
});
</script>

<style></style>
