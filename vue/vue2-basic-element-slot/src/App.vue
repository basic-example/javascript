<template>
  <div>
    <h1>App Component</h1>
    <Example>
      <h2>Child Component Message</h2>
    </Example>
    <Example #default="{ user: person }">
      <h2>default</h2>
      <p>person: {{ person }}</p>
    </Example>
    <Example>
      <template #[temp]="{ user: person1 }">
        <h2>default</h2>
        <p>person: {{ person1 }}</p>
      </template>
      <template #main="{ user: person2 }">
        <h2>main</h2>
        <p>person: {{ person2 }}</p>
      </template>
      <template #sub="{ user: person3 }">
        <h2>sub</h2>
        <p>person: {{ person3 ? true : "no value" }}</p>
      </template>
    </Example>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Example from "./Example.vue";

export default Vue.extend({
  components: {
    Example,
  },
  data: () => ({
    temp: "default",
  }),
});
</script>

<style></style>
