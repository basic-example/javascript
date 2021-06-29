<template>
  <h1>App Component</h1>
</template>

<script>
import { defineComponent, isReactive, reactive, toRefs } from "vue";
import Sandbox from "./utils/sandbox";

const sandbox = Sandbox({
  isReactive,
  reactive,
  toRefs,
});

sandbox.exec(`
  const reactives = reactive({
    title: "Hello World",
    user: "Lee",
  });
`);
sandbox.result("isReactive(reactives)");

sandbox.exec(`
  const refs = toRefs(reactives)
`);
sandbox.result("refs.title");
sandbox.result("refs.user");

sandbox.exec(`
  reactives.user = "Yoo";
`);
sandbox.result("refs.user.value");

sandbox.exec(`
  refs.title.value = "Something Changed";
`);
sandbox.result("reactives.title");

export default defineComponent({});
</script>

<style></style>
