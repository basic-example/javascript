<template>
  <div>
    <h1>App Component</h1>
    <div v-for="(num, i) in nums" :key="i">
      {{ num }}
    </div>
    <button
      @click="
        () => {
          pushNum();
          $forceUpdate();
        }
      "
    >
      pushNum() && $forceUpdate();
    </button>
    <button
      @click="
        () => {
          pushNum();
        }
      "
    >
      pushNum()
    </button>
    <button
      @click="
        () => {
          newNums();
        }
      "
    >
      newNums()
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      nums: [1, 2, 3],
    };
  },
  methods: {
    newNums() {
      this.nums = [Math.floor(Math.random() * 100) + 1];
    },
    pushNum() {
      this.nums[this.nums.length] = Math.floor(Math.random() * 100) + 1;
    },
  },
});
</script>

<style></style>
