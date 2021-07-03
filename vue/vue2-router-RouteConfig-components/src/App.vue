<template>
  <div>
    <h1>App Component</h1>
    <router-view></router-view>
    <router-view name="a"></router-view>
    <router-view name="b"></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import VueRouter from "vue-router";
import { RouteConfig } from "vue-router/types";

const routes: RouteConfig[] = [
  {
    components: {
      a: {
        template: "<h2>a Component</h2>",
      },
      b: {
        template: "<h2>b Component</h2>",
      },
      default: {
        template: "<h2>default Component</h2>",
      },
    },
    path: "/",
  },
];
const router = new VueRouter({
  routes,
});

export default Vue.extend({
  router,
});
</script>

<style>
a {
  display: block;
}
</style>
