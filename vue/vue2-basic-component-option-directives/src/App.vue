<template>
  <div>
    <h1>App Component</h1>
    <button @click="toggleInput">toggle input</button>
    <button @click="changeMessage">change message</button>
    <hr />
    <input v-if="!hide" v-model="text" v-focus:[hide]="'!!!'" type="text" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    hide: false,
    text: Math.random(),
  }),
  directives: {
    focus: {
      // (el, binding, newNode, oldNode)
      bind: () => {
        console.log("bind");

        // binding.name
        // binding.value
        // binding.expression
        // binding.arg
        // binding.modifiers
      },
      // after its children have updated
      componentUpdated: () => {
        console.log("componentUpdated");
      },
      // called when element has been inserted into its parent node
      inserted: (el, binding) => {
        console.log("inserted");

        const hide = binding.arg ? "true" : "false";
        (
          el as HTMLInputElement
        ).value = `hide value is ${hide} ${binding.value}`;
      },
      unbind: () => {
        console.log("unbind");
      },
      // before its children have updated
      update: () => {
        console.log("update");
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
</script>

<style></style>
