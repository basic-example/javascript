<template>
  <h1>App Component</h1>
  <textarea
    style="width: 100%; height: 8em"
    disabled
    value="
      const obj = {
        count: 1,
      };
      const readonlyed = readonly(obj);
      const reactived = reactive(obj);
    "
  />
</template>

<script>
import { defineComponent, isReadonly, reactive, readonly } from "vue";
import log from "./utils/log";

const obj = {
  count: 1,
};
const readonlyed = readonly(obj);
const reactived = reactive(obj);

log("isReadonly(obj)", isReadonly(obj));
log("isReadonly(reactived)", isReadonly(reactived));
log("isReadonly(readonlyed)", isReadonly(readonlyed));
log("isReadonly(reactive(readonlyed))", isReadonly(reactive(readonlyed)));
log("isReadonly(readonly(reactived))", isReadonly(readonly(reactived)));

export default defineComponent({});
</script>

<style></style>
