<template>
  <div>
    <h1>App Component</h1>
    <p>count(App): {{ count }}</p>
    <hr />
    <Child :count="count" @update:count="count = $event" />
    <p>above code is equivalent to</p>
    <Child :count.sync="count" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Child from "./Child.vue";

export default Vue.extend({
  components: {
    Child,
  },
  data: () => ({
    count: 1,
  }),
});
</script>

<style></style>
