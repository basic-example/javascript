<template>
  <div>
    <h1>App Component</h1>
    <router-link :to="{ name: 'auth' }">/auth</router-link>
    <router-link :to="{ name: 'account' }">/auth/account</router-link>
    <router-link :to="{ name: 'login' }">/login</router-link>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import VueRouter from "vue-router";
import { RouteConfig } from "vue-router/types";

const routes: RouteConfig[] = [
  {
    beforeEnter: (to, from, next) => {
      console.log(to, from);
      if (to.meta?.shouldAuth === true) {
        next({
          hash: "#by-auth",
          name: "login",
        });
      } else {
        next();
      }
    },
    children: [
      {
        // when parent beforeEnter existing and redirected to other url
        // chld beforeEnter is not called
        beforeEnter: () => {
          alert("this should be not called");
        },
        component: {
          template: `<h3>Account Component</h3>`,
        },
        // parent meta data is not merged child routes.
        // so must be set meta manually in child route like parent route
        meta: {
          shouldAuth: true,
        },
        name: "account",
        path: "account",
      },
    ],
    component: {
      template: `
        <div>
          <h2>Auth Component</h2>
          <router-view></router-view>
        </div>
      `,
    },
    meta: {
      shouldAuth: true,
    },
    name: "auth",
    path: "/auth",
  },
  {
    component: {
      template: `
        <div>
          <h2>Login Component</h2>
          <p>$route.meta.foo: {{ $route.meta.foo }}</p>
        </div>
      `,
    },
    meta: {
      foo: "bar",
    },
    name: "login",
    path: "/login",
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
