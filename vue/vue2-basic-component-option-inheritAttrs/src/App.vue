<template>
  <div>
    <h1>App Component</h1>
    <InheritAttrsFalse a="aaa" b="bbb" c="ccc" d="ddd" />
    <InheritAttrsTrue a="aaa" b="bbb" c="ccc" d="ddd" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import InheritAttrsFalse from "./InheritAttrsFalse.vue";
import InheritAttrsTrue from "./InheritAttrsTrue.vue";

export default Vue.extend({
  components: {
    InheritAttrsFalse,
    InheritAttrsTrue,
  },
});
</script>

<style></style>
