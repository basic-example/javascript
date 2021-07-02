<template>
  <div>
    <h1>App Component</h1>
    <Child />
    <Parent>
      <Child />
    </Parent>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Child from "./Child.vue";
import Parent from "./Parent.vue";

export default Vue.extend({
  components: {
    Child,
    Parent,
  },
  data: () => ({
    abc: "ffff",
    foo: 1234,
  }),
  methods: {
    bar: () => {
      alert("App's bar method");
    },
  },
});
</script>

<style></style>
