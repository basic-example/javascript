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

      const shallowReadonlyed = shallowReadonly(obj);
      const readonlyed = readonly(obj);
    "
  />
</template>

<script lang="ts">
import { defineComponent, isReadonly, readonly, shallowReadonly } from "vue";
import log from "./utils/log";

const obj = {
  foo: 1,
  nested: {
    bar: 2,
  },
};

const shallowReadonlyed = shallowReadonly(obj);
const readonlyed = readonly(obj);

log("isReadonly(readonlyed)", isReadonly(readonlyed));
log("isReadonly(shallowReadonlyed)", isReadonly(shallowReadonlyed));
log("isReadonly(readonlyed.foo)", isReadonly(readonlyed.foo));
log("isReadonly(shallowReadonlyed.foo)", isReadonly(shallowReadonlyed.foo));
log("isReadonly(readonlyed.nested)", isReadonly(readonlyed.nested));
log(
  "isReadonly(shallowReadonlyed.nested)",
  isReadonly(shallowReadonlyed.nested)
);

export default defineComponent({});
</script>

<style></style>
