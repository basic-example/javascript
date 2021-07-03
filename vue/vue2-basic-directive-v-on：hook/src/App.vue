<template>
  <div>
    <h1>App Component</h1>
    <button @click="show = !show">show toggle</button>
    <Child
      v-if="show"
      @hook:beforeCreate="beforeCreate"
      @hook:created="created"
      @hook:beforeMount="beforeMount"
      @hook:mounted="mounted"
      @hook:beforeUpdate="beforeUpdate"
      @hook:updated="updated"
      @hook:beforeDestroy="beforeDestroy"
      @hook:destroyed="destroyed"
    />
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
      show: true,
    };
  },
  methods: {
    beforeCreate() {
      console.log("child beforeCreate");
    },
    beforeDestroy() {
      console.log("child beforedestroy");
    },
    beforeMount() {
      console.log("child beforeMount");
    },
    beforeUpdate() {
      console.log("child beforeUpdate");
    },
    created() {
      console.log("child created");
    },
    destroyed() {
      console.log("child destroyed");
    },
    mounted() {
      console.log("child mounted");
    },
    updated() {
      console.log("child updated");
    },
  },
});
</script>

<style></style>
