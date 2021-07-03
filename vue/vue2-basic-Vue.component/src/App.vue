<template>
  <div>
    <h1>App Component</h1>
    <p>Vue.component is global component definition</p>
    <UsingObject method="object" />
    <UsingInline inline-template>
      <div>
        <h2>Example using inline template.</h2>
      </div>
    </UsingInline>
    <UsingXTemplate />
    <UsingAsyncPromise method="async promise" />
    <UsingAsyncImport method="async import" />
    <UsingAsyncObject method="async object" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

Vue.component("UsingObject", {
  props: {
    method: {
      default: null,
      type: String,
    },
  },
  template: `
    <div>
      <h2>Example using {{ method }}</h2>
    </div>
  `,
});
Vue.component("UsingInline", {});
Vue.component("UsingXTemplate", {
  // template is existed in public/index.html
  template: "#hello-world-template",
});
Vue.component("UsingAsyncPromise", (resolve) => {
  setTimeout(() => {
    resolve({
      props: {
        method: {
          default: null,
          type: String,
        },
      },
      template: `
        <div>
          <h2>Example using {{ method }}</h2>
        </div>
      `,
    });
  }, 1000);
});
Vue.component("UsingAsyncImport", () => import("./Example.vue"));
Vue.component("UsingAsyncObject", () => ({
  component: import("./Example.vue"),
  delay: 200, // delay for loading component
  // loading: LoadingComponent,
  // timeout: 3000,
  // error: ErrorComponent
}));

export default Vue.extend({});
</script>

<style></style>
