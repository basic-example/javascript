<template>
  <h1>App Component</h1>
  <textarea
    style="width: 100%; height: 12em"
    disabled
    value="
      const obj = {
        count: 1,
      };
      const readonlyed = readonly(obj);
      const reactived = reactive(obj);
    "
  />
  <div></div>
</template>

<script lang="ts">
import { defineComponent, isProxy, reactive, readonly } from "vue";
import log from "./utils/log";

const obj = {
  count: 1,
};
const readonlyed = readonly(obj);
const reactived = reactive(obj);

log("isProxy(readonlyed)", isProxy(readonlyed));
log("isProxy(reactived)", isProxy(reactived));

export default defineComponent({});
</script>

<style></style>
