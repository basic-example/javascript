<template>
  <div>
    <h1>App Component</h1>
    <!-- it is not reactive -->
    <p>{{ $children }}</p>
    <Parent>
      <Child />
    </Parent>
    <Parent />
    <Example />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Child from "./Child.vue";
import Example from "./Example.vue";
import Parent from "./Parent.vue";

export default Vue.extend({
  components: {
    Child,
    Example,
    Parent,
  },
  mounted() {
    // there’s no order guarantee for $children
    // console.log(this.$children); // [Parent, Parent, Example]
    // console.log(this.$children[0].$el);
    // console.log(this.$children[1].$options);
    // console.log(this.$children[2].$data);
  },
});
</script>

<style></style>
