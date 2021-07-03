<template>
  <div>
    <h1>App Component</h1>
    <router-link :to="{ name: 'aaa' }">aaa</router-link>
    <router-link :to="{ name: 'bbb' }">bbb</router-link>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import VueRouter from "vue-router";
import { RouteConfig } from "vue-router/types";

const routes: RouteConfig[] = [
  {
    component: {
      template: `<h2>A Component</h2>`,
    },
    name: "aaa",
    path: "/a",
  },
  {
    component: {
      template: `<h2>B Component</h2>`,
    },
    name: "bbb",
    path: "/b",
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
