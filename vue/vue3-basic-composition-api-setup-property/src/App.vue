<template>
  <h1>App Component</h1>
  <Child a="aaa" b="bbb" :c="ccc" @test="testEventListener">
    <template #header>
      <p>Header Menu</p>
    </template>
    <p>Hello World!</p>
  </Child>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Child from "./Child.vue";

export default defineComponent({
  components: {
    Child,
  },
  data() {
    return {
      ccc: "abcd",
    };
  },
  methods: {
    testEventListener: () => {
      alert("test emit event fired!");
    },
  },
});
</script>

<style></style>
