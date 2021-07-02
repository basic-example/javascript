<template>
  <div>
    <h2>Child Component</h2>
    <p>count : {{ count }}</p>
    <p>msg : {{ msg }}</p>
    <button @click="addMark">addMark</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    msg: "hello world",
  }),
  methods: {
    addMark() {
      this.msg = this.msg + ".";
    },
  },
  props: {
    count: {
      default: null,
      type: Number,
    },
  },
});
</script>

<style></style>
