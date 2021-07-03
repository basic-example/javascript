<template>
  <div>
    <h1>App Component</h1>
    <!-- eslint-disable-next-line vue/v-on-style -->
    <button v-on:click="clicked">click button</button>
    <button @click="clicked">click button</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    clicked: function () {
      alert("button is clicked~!");
    },
  },
});
</script>

<style></style>
