<template>
  <div>
    <h1>App Component</h1>
    <Child>{{ message }}</Child>
    <hr />
    <!-- this will not be compiled -->
    <div v-pre>{{ message }}</div>
    <Child v-pre>{{ message }}</Child>
    <div v-pre>
      <Child>{{ message }}</Child>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Child from "./Child.vue";

export default Vue.extend({
  components: {
    Child,
  },
  data() {
    return {
      message: "Hello World!",
    };
  },
});
</script>

<style></style>
