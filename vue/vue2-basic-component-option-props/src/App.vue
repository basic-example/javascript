<template>
  <div>
    <h1>App Component</h1>
    <TextNoneType text="none type" />
    <TextStringType text="string type" />
    <TextStringTypeWithDefault />
    <TextWithCustomValidator text="custom validator" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TextNoneType from "./TextNoneType.vue";
import TextStringType from "./TextStringType.vue";
import TextStringTypeWithDefault from "./TextStringTypeWithDefault.vue";
import TextWithCustomValidator from "./TextWithCustomValidator.vue";

export default Vue.extend({
  components: {
    TextNoneType,
    TextStringType,
    TextStringTypeWithDefault,
    TextWithCustomValidator,
  },
});
</script>

<style></style>
