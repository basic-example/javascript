<template>
  <div>
    <h1>App Component</h1>
    <router-link :to="{ name: 'aaa', params: { id: 'aa' }, hash: 'a' }">
      aaa
    </router-link>
    <router-link :to="{ name: 'bbb', params: { id: 'bb' }, hash: 'b' }">
      bbb
    </router-link>
    <router-link :to="{ name: 'ccc', params: { id: 'cc' }, hash: 'c' }">
      ccc
    </router-link>
    <router-link to="/d-extra">ddd</router-link>
    <router-link to="/something">others</router-link>
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
      template: "<div><h2>AAA</h2></div>",
    },
    name: "aaa",
    path: "/a/:id",
  },
  {
    component: {
      template: "<div><h2>BBB</h2></div>",
    },
    name: "bbb",
    path: "/b/:id",
  },
  {
    component: {
      template: "<div><h2>CCC</h2></div>",
    },
    name: "ccc",
    path: "/c/:id",
  },
  {
    component: {
      template: "<div><h2>DDD {{ $route.params }} </h2></div>",
    },
    name: "ddd",
    path: "/d-*",
  },
  {
    component: {
      template: "<div><h2>Others {{ $route.params }} </h2></div>",
    },
    name: "other",
    path: "/*",
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
