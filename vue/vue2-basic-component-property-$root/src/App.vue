<template>
  <div>
    <h1>App Component</h1>
    <p>{{ $root.foo }}</p>
    <button @click="$root.bar">run $root.bar method</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style></style>
