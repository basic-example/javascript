<template>
  <div>
    <h1>App Component</h1>
    <Child @custom-event="alertMessage($event)" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Child from "./Child.vue";

export default Vue.extend({
  components: {
    Child,
  },
  methods: {
    alertMessage: (event: string) => {
      alert(event);
    },
  },
});
</script>

<style></style>
