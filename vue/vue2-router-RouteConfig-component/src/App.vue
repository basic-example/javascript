<template>
  <div>
    <h1>App Component</h1>
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import VueRouter from "vue-router";
import { RouteConfig } from "vue-router/types";

const routes: RouteConfig[] = [
  { component: { template: "<h2>Foo Component</h2>" }, path: "/foo" },
  { component: { template: "<h2>Bar Component</h2>" }, path: "/bar" },
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
