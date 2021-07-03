<template>
  <div>
    <p>name: {{ name }}</p>
    <ul v-if="items">
      <li v-for="(childItems, childName) in items" :key="childName">
        <Recursive :items="childItems" :name="childName" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue/types/options";

export default Vue.extend({
  // alternative method for async loading component
  // beforeCreate() {
  //   this.$options.components.Recursive = require("./Recursive");
  // },
  components: {
    Recursive: (() => import("./Recursive.vue")) as Component,
  },
  props: {
    items: {
      default: () => ({}),
      type: Object,
    },
    name: {
      default: "",
      type: String,
    },
  },
});
</script>

<style></style>
