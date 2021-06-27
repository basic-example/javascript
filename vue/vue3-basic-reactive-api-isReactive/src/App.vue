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
import { defineComponent, isReactive, reactive, readonly } from "vue";
import log from "./utils/log";

const obj = {
  count: 1,
};
const readonlyed = readonly(obj);
const reactived = reactive(obj);

log("isReactive(readonlyed)", isReactive(readonlyed));
log("isReactive(reactived)", isReactive(reactived));
log("isReactive(readonly(reactived))", isReactive(readonly(reactived)));
log("isReactive(reactive(reactived))", isReactive(reactive(reactived)));
log("isReactive(readonly(readonlyed))", isReactive(readonly(readonlyed)));
log("isReactive(reactive(readonlyed))", isReactive(reactive(readonlyed)));

export default defineComponent({});
</script>

<style></style>
