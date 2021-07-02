<template>
  <div>
    <h1>App Component</h1>
    <button @click="toggleInput">toggle input</button>
    <button @click="changeMessage">change message</button>
    <hr />
    <input v-if="!hide" v-model="text" v-abcd:[hide]="'!!!'" type="text" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

/* eslint-disable vue/order-in-components */
export default defineComponent({
  data: () => ({
    hide: false,
    text: Math.random(),
  }),
  directives: {
    abcd: {
      beforeMount: () => {
        console.log("beforeMount");
      },
      beforeUnmount: () => {
        console.log("beforeUnmount");
      },
      beforeUpdate: () => {
        console.log("beforeUpdate");
      },
      created: () => {
        // el, binding, newNode, oldNode
        console.log("created");
      },
      mounted: (el) => {
        // el, binding, newNode, oldNode
        console.log("mounted");
        el.focus();
      },
      unmounted: () => {
        console.log("unmounted");
      },
      updated: () => {
        console.log("updated");
      },
    },
  },
  methods: {
    changeMessage() {
      this.text = Math.random();
    },
    toggleInput() {
      this.hide = !this.hide;
    },
  },
});
/* eslint-enable vue/order-in-components */
</script>

<style></style>
