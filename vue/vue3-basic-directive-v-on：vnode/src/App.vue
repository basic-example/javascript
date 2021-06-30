<template>
  <div>
    <h1>App Component</h1>
    <button @click="show = !show">show toggle</button>
    <Child
      v-if="show"
      @vnode-beforeCreate="beforeCreate"
      @vnode-created="created"
      @vnode-beforeMount="beforeMount"
      @vnode-mounted="mounted"
      @vnode-beforeUpdate="beforeUpdate"
      @vnode-updated="updated"
      @vnode-beforeUnmount="beforeUnmount"
      @vnode-unmount="unmount"
    />
  </div>
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
      show: true,
    };
  },
  methods: {
    beforeCreate() {
      console.log("child vnode-beforeCreate");
    },
    beforeMount() {
      console.log("child vnode-beforeMount");
    },
    beforeUnmount() {
      console.log("child vnode-beforeUnmount");
    },
    beforeUpdate() {
      console.log("child vnode-beforeUpdate");
    },
    created() {
      console.log("child vnode-created");
    },
    mounted() {
      console.log("child vnode-mounted");
    },
    unmount() {
      console.log("child vnode-unmount");
    },
    updated() {
      console.log("child vnode-updated");
    },
  },
});
</script>

<style></style>
