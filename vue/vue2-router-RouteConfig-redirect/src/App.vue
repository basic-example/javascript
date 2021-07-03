<template>
  <div>
    <h1>App Component</h1>
    <router-link to="/using-path">using path</router-link>
    <router-link to="/using-name">using name</router-link>
    <router-link
      :to="{
        name: 'by-function',
        hash: '#hhh',
        params: { a: 'aaa' },
        query: { a: 'ccc' },
      }"
      >using function</router-link
    >
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import VueRouter from "vue-router";
import { RouteConfig } from "vue-router/types";

const routes: RouteConfig[] = [
  {
    name: "something",
    path: "/something",
  },
  {
    name: "by-path",
    path: "/using-path",
    redirect: "/somethings",
  },
  {
    name: "by-name",
    path: "/using-name",
    redirect: { hash: "#kkk", name: "something" },
  },
  {
    name: "by-function",
    path: "/using-function",
    redirect: (to) => {
      const { hash, params, query } = to;

      return {
        hash: hash,
        params: {
          abcd: params.a,
        },
        path: "/somethings/:abcd",
        query: {
          q: query.a,
        },
      };
    },
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
