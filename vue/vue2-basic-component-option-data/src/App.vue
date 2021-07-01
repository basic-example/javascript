<template>
  <div>
    <h1>App Component</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Sandbox from "./utils/sandbox";

const sandbox = Sandbox({
  Object,
  Vue,
});
sandbox.exec(`
  const data = { a: 1 };
`);

sandbox.result(`Object.getOwnPropertyDescriptors(data)`);

sandbox.exec(`
  const vm = new Vue({
    data: data,
  });
  data.a = 2;
`);

sandbox.result(`data.a`);
sandbox.result(`vm.a`);

sandbox.exec(`
  vm.a = 3;
`);
sandbox.result(`data.a`);
sandbox.result(`vm.a`);

sandbox.exec(`
  data.b = 1; // un-trackable
`);

sandbox.result(`data.b`);
sandbox.result(`vm.b`);

export default Vue.extend({
  data: () => {
    return {
      message: "hello world",
    };
  },
});
</script>
