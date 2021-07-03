<template>
  <div>
    <h1>App Component</h1>
    <router-link to="/abc">abc</router-link>
    <router-link to="/aaa">aaa</router-link>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import VueRouter from "vue-router";
import { RouteConfig } from "vue-router/types";

const routes: RouteConfig[] = [
  {
    alias: "/aaa",
    component: {
      template: `<h2>Abc Component</h2>`,
    },
    path: "/abc",
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
