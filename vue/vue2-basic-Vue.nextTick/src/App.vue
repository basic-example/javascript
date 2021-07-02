<template>
  <div>
    <h1>App Component</h1>
    <hr />
    <p>{{ msg }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      msg: "custom message",
    };
  },
  mounted() {
    this.$data.msg = "hello world";

    console.log(this.$el.textContent); // custom message

    Vue.nextTick(() => {
      console.log(this.$el.textContent); // hello world
    });

    // below code is equivalent to previous code
    // await this.$nextTick()
    // console.log(this.$el.textContent);
  },
});
</script>

<style></style>
