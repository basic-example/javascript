<template>
  <h2>Child Component</h2>
  <SimpleCmp name="Simple" />
  <ShowLoadingCmp name="ShowLoading" />
  <NotShowLoadingCmp name="NotShowLoading" />
  <ErrorCmp name="Error" />
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from "vue";
import Error from "./Error.vue";
import Loading from "./Loading.vue";

const SimpleCmp = defineAsyncComponent(() => import("./Something.vue"));
const ShowLoadingCmp = defineAsyncComponent({
  async loader() {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve("something");
      }, 1000);
    });
    await promise;
    return import("./Something.vue");
  },
  loadingComponent: Loading,
});
const NotShowLoadingCmp = defineAsyncComponent({
  delay: 5000, // <- delay for show loading component
  async loader() {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve("something");
      }, 1000);
    });
    await promise;
    return import("./Something.vue");
  },
  loadingComponent: Loading,
  // suspensible: false,
});
const ErrorCmp = defineAsyncComponent({
  delay: 0,
  errorComponent: Error,
  async loader() {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve("something");
      }, 3000);
    });
    await promise;
    return import("./Something.vue");
  },
  loadingComponent: Loading,
  timeout: 2000,
});

export default defineComponent({
  components: {
    ErrorCmp,
    NotShowLoadingCmp,
    ShowLoadingCmp,
    SimpleCmp,
  },
});
</script>

<style></style>
