<template>
  <div>
    <h1>App Component</h1>
    <suspense>
      <template #default>
        <UsingAwaitInSetup />
      </template>
      <template #fallback>
        <div>Loading1...</div>
      </template>
    </suspense>
    <suspense>
      <template #default>
        <UsingDefineAsync />
      </template>
      <template #fallback>
        <div>Loading2...</div>
      </template>
    </suspense>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from "vue";
import UsingAwaitInSetup from "./UsingAwaitInSetup.vue";

export default defineComponent({
  components: {
    UsingAwaitInSetup,
    UsingDefineAsync: defineAsyncComponent(
      () => import("./UsingDefineAsync.vue")
    ),
  },
});
</script>

<style></style>
