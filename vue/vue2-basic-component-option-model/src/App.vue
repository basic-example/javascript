<template>
  <div>
    <h1>App Component</h1>
    <CheckboxBase v-model="checkboxBase" />
    <p>in App: {{ checkboxBase }}</p>
    <hr />
    <CheckboxCustom v-model="checkboxCustom" />
    <p>in App: {{ checkboxCustom }}</p>
    <hr />
    <TextBase v-model="textBase" />
    <p>in App: {{ textBase }}</p>
    <hr />
    <TextCustom v-model="textCustom" />
    <p>in App: {{ textCustom }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CheckboxBase from "./CheckboxBase.vue";
import CheckboxCustom from "./CheckboxCustom.vue";
import TextBase from "./TextBase.vue";
import TextCustom from "./TextCustom.vue";

export default Vue.extend({
  components: {
    CheckboxBase,
    CheckboxCustom,
    TextBase,
    TextCustom,
  },
  data() {
    return {
      checkboxBase: false,
      checkboxCustom: false,
      textBase: "fff",
      textCustom: "fff",
    };
  },
});
</script>

<style></style>
