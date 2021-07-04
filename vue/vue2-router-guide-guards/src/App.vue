<template>
  <div>
    <h2>App Component</h2>
    <router-link to="/">/</router-link>
    <router-link to="/hello">/hello</router-link>
    <router-link to="/hello/world">/hello/world</router-link>
    <router-link to="/parent">/parent</router-link>
    <router-link to="/parent/child">/parent/child</router-link>
    <!--
    "/"
      [global] beforeEach
      [global] beforeResolve
      [global] afterEach
    "/hello"
      [global] beforeEach
      [route] [hello] beforeEnter
      [component] [hello] beforeRouteEnter
      [global] beforeResolve
      [global] afterEach
    "/hello/world"
      [global] beforeEach
      [component] [hello] beforeRouteUpdate
      [route] [world] beforeEnter
      [component] [world] beforeRouteEnter
      [global] beforeResolve
      [global] afterEach
    "/parent"
      [component] [hello] beforeRouteLeave
      [global] beforeEach
      [route] [parent] beforeEnter
      [component] [parent] beforeRouteEnter
      [global] beforeResolve
      [global] afterEach
    "/parent/child"
      [global] beforeEach
      [component] [parent] beforeRouteUpdate
      [route] [child] beforeEnter
      [component] [child] beforeRouteEnter
      [global] beforeResolve
      [global] afterEach
    -->
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import VueRouter from "vue-router";
import { RouteConfig } from "vue-router/types";

const routes: RouteConfig[] = [
  {
    // route guard
    beforeEnter: (to, from, next) => {
      console.log("[route] [parent] beforeEnter");
      next();
    },
    children: [
      {
        // route guard
        beforeEnter: (to, from, next) => {
          console.log("[route] [child] beforeEnter");
          next();
        },
        component: {
          // component guards
          beforeRouteEnter(to, from, next) {
            console.log("[component] [child] beforeRouteEnter");
            next();
          },
          beforeRouteLeave(to, from, next) {
            console.log("[component] [child] beforeRouteLeave");
            next();
          },
          beforeRouteUpdate(to, from, next) {
            console.log("[component] [child] beforeRouteUpdate");
            next();
          },
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
      // component guards
      beforeRouteEnter(to, from, next) {
        console.log("[component] [parent] beforeRouteEnter");
        next();
      },
      beforeRouteLeave(to, from, next) {
        console.log("[component] [parent] beforeRouteLeave");
        next();
      },
      beforeRouteUpdate(to, from, next) {
        console.log("[component] [parent] beforeRouteUpdate");
        next();
      },
      template: `
        <div>
          <h2>Parent Component</h2>
          <router-view></router-view>
        </div>
      `,
    },
    path: "/parent",
  },
  {
    // route guard
    beforeEnter: (to, from, next) => {
      console.log("[route] [hello] beforeEnter");
      next();
    },
    children: [
      {
        // route guard
        beforeEnter: (to, from, next) => {
          console.log("[route] [world] beforeEnter");
          next();
        },
        component: {
          // component guards
          beforeRouteEnter(to, from, next) {
            console.log("[component] [world] beforeRouteEnter");
            next();
          },
          beforeRouteLeave(to, from, next) {
            console.log("[component] [world] beforeRouteLeave");
            next();
          },
          beforeRouteUpdate(to, from, next) {
            console.log("[component] [world] beforeRouteUpdate");
            next();
          },
          template: `
            <div>
              <h3>World Component</h3>
            </div>
          `,
        },
        path: "world",
      },
    ],
    component: {
      // component guards
      beforeRouteEnter(to, from, next) {
        console.log("[component] [hello] beforeRouteEnter");
        next();
      },
      beforeRouteLeave(to, from, next) {
        console.log("[component] [hello] beforeRouteLeave");
        next();
      },
      beforeRouteUpdate(to, from, next) {
        console.log("[component] [hello] beforeRouteUpdate");
        next();
      },
      template: `
        <div>
          <h2>Hello Component</h2>
        </div>
      `,
    },
    path: "/hello",
  },
];
const router = new VueRouter({
  routes,
});

// global guards
router.afterEach(() => {
  console.log("[global] afterEach");
});
router.beforeEach((to, from, next) => {
  console.log("[global] beforeEach");
  next();
});
router.beforeResolve((to, from, next) => {
  console.log("[global] beforeResolve");
  next();
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
