<template>
  <div>
    <h1>App Component</h1>
    <Example>
      <template #main="{ user: person }">
        <p>username: {{ person }}</p>
      </template>
    </Example>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style></style>
