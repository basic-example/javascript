<template>
  <h1>App Component</h1>
  <textarea
    style="width: 100%; height: 15em"
    disabled
    value="
      const obj = {
        count: 1,
      };

      ++reactive(obj).count; // success;

      const reactivedCountIncreased = obj.count == 2;

      ++readonly(reactive(obj)).count; // fail
      ++readonly(obj).count; // fail

      const readonlyedCountIncreased = obj.count > 2;
    "
  />
</template>

<script>
import { defineComponent, reactive, readonly } from "vue";
import log from "./utils/log";

const obj = {
  count: 1,
};

++reactive(obj).count; // success;

const reactivedCountIncreased = obj.count == 2;

++readonly(reactive(obj)).count; // fail
++readonly(obj).count; // fail

const readonlyedCountIncreased = obj.count > 2;

log("reactivedCountIncreased", reactivedCountIncreased);
log("readonlyedCountIncreased", readonlyedCountIncreased);

export default defineComponent({});
</script>

<style></style>
