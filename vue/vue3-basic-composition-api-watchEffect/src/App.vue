<template>
  <h1>App Component</h1>
  <p>ID: {{ id }}</p>
  <p>TITLE: {{ title }}</p>
  <button @click="increaseId">increase ID</button>
  <button @click="changeTitle">change title</button>
</template>

<script lang="ts">
import { Ref, defineComponent, ref, watch, watchEffect } from "vue";

const id = ref(1);
const title = ref("");

export default defineComponent({
  setup() {
    const increaseId = () => {
      id.value++;
    };
    const changeTitle = () => {
      title.value = "random value:" + Math.random();
    };
    const loggingTitle = () => {
      console.log(title.value);
    };
    const load = (id: Ref<number>) => {
      return fetch(
        `https://jsonplaceholder.typicode.com/todos/${id.value}`
      ).then((res) => res.json());
    };

    // this is not call when title is changed
    watchEffect(async () => {
      console.log("watchEffect with title setter before async call");
      changeTitle();
      const data = await load(id);
      title.value = data.title;
    });

    // this is not call when title is changed
    watchEffect(async () => {
      console.log("watchEffect with title setter after async call");
      const data = await load(id);
      changeTitle();
      title.value = data.title;
    });

    // important: this is call when title is changed
    watchEffect(async () => {
      console.log("watchEffect with title getter before async call");
      loggingTitle();
      const data = await load(id);
      title.value = data.title;
    });

    // this is not call when title is changed
    watchEffect(async () => {
      console.log("watchEffect with title getter after async call");
      const data = await load(id);
      loggingTitle();
      title.value = data.title;
    });

    // this is not call when title is changed
    watch(id, async () => {
      console.log("watch");
      loggingTitle();
      const data = await load(id);
      title.value = data.title;
    });

    return {
      changeTitle,
      id,
      increaseId,
      title,
    };
  },
});
</script>

<style></style>
