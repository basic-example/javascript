<template>
  <div>
    <h1>App Component</h1>
    <router-link to="/">/</router-link>
    <router-link to="/parent">/parent</router-link>
    <router-link to="/parent/child">/parent/child</router-link>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import VueRouter from "vue-router";
import { RouteConfig } from "vue-router/types";

const routes: RouteConfig[] = [
  {
    children: [
      {
        component: {
          template: `
            <div>
              <h3>Child Component</h3>
            </div>
          `,
        },
        path: "child",
      },
    ],
    component: {
      template: `
        <div>
          <h2>Parent Component</h2>
          <router-view></router-view>
        </div>
      `,
    },
    path: "/parent",
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
