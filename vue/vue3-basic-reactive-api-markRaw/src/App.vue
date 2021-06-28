<template>
  <div>
    <h1>App Component</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, isProxy, isReactive, markRaw, reactive } from "vue";
import log from "./utils/log";

const obj = {
  count: 1,
};

const raw = markRaw(obj);

log("obj", obj); // {count:1, __v_skip: true}
log("raw", raw); // {count:1, __v_skip: true}
log("raw === obj", raw === obj);
log("isProxy(raw)", isProxy(raw));
log("isReactive(reactive(raw))", isReactive(reactive(raw)));

export default defineComponent({});
</script>

<style></style>
