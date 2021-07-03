<template>
  <div>
    <h1>App Component</h1>
    <p>type some text and click button for comparing</p>
    <hr />
    <div>
      <input v-if="toggleWithoutKey" placeholder="enter email" type="text" />
      <input v-if="!toggleWithoutKey" placeholder="enter age" type="text" />
      <button @click="toggleWithoutKey = !toggleWithoutKey">
        toggleWithoutKey
      </button>
    </div>
    <div>
      <input
        v-if="toggleWithKey"
        key="email"
        placeholder="enter email"
        type="text"
      />
      <input
        v-if="!toggleWithKey"
        key="age"
        placeholder="enter age"
        type="text"
      />
      <button @click="toggleWithKey = !toggleWithKey">toggleWithKey</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      toggleWithKey: true,
      toggleWithoutKey: true,
    };
  },
});
</script>

<style></style>
