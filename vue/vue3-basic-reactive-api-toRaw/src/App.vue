<template>
  <div>
    <h1>App Component</h1>
    <textarea
      style="width: 100%; height: 7em"
      disabled
      value="
        const obj = {
          count: 1,
        };
        const reactived = reactive(obj);
      "
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, isReactive, reactive, toRaw } from "vue";
import log from "./utils/log";

const obj = {
  count: 1,
};
const reactived = reactive(obj);

log("obj", obj);
log("reactived", reactived);
log("toRaw(reactived)", toRaw(reactived));
log("isReactive(reactived)", isReactive(reactived));
log("isReactive(toRaw(reactived))", isReactive(toRaw(reactived)));
log("reactived === obj", reactived === obj);
log("toRaw(reactived) === obj", toRaw(reactived) === obj);

export default defineComponent({});
</script>

<style></style>
