<template>
  <h1>App Component</h1>
  <textarea
    style="width: 100%; height: 12em"
    disabled
    value="
      const obj = {
        foo: 1,
        nested: {
          bar: 2,
        },
      };

      const shallowReactived = shallowReactive(obj);
      const reactived = reactive(obj);
    "
  />
</template>

<script lang="ts">
import { defineComponent, isReactive, reactive, shallowReactive } from "vue";
import log from "./utils/log";

const obj = {
  foo: 1,
  nested: {
    bar: 2,
  },
};

const reactived = reactive(obj);
const shallowReactived = shallowReactive(obj);

log("isReactive(reactived)", isReactive(reactived));
log("isReactive(reactived.foo)", isReactive(reactived.foo));
log("isReactive(reactived.nested)", isReactive(reactived.nested));
log("isReactive(shallowReactived)", isReactive(shallowReactived));
log("isReactive(shallowReactived.foo)", isReactive(shallowReactived.foo));
log("isReactive(shallowReactived.nested)", isReactive(shallowReactived.nested));

export default defineComponent({});
</script>

<style></style>
