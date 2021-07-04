<template>
  <div>
    <h1>App Component</h1>
    <router-link
      :to="{
        name: 'a',
        params: { pa: 'fff', paa: 'hhh' },
        query: { qa: 'jjj', qaa: 'kkk' },
      }"
    >
      /a
    </router-link>
    <router-link
      :to="{
        name: 'b',
        params: { pb: 'fff', pbb: 'hhh' },
        query: { qb: 'jjj', qbb: 'kkk' },
      }"
    >
      /b
    </router-link>
    <router-link
      :to="{
        name: 'c',
        params: { pc: 'ttt', pcc: 'iii' },
        query: { qc: 'uuu', qcc: 'jjj' },
      }"
    >
      /c
    </router-link>
    <router-view></router-view>
    <router-view name="side"></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import VueRouter from "vue-router";
import { RouteConfig } from "vue-router/types";

const routes: RouteConfig[] = [
  {
    component: {
      props: ["pa", "paa", "qa"],
      template: `
        <div>
          <h2>AAA Component</h2>
          <p>pa: {{ pa }}</p>
          <p>paa: {{ paa }}</p>
          <p style="color:red">qa: {{ qa }}</p>
          <p>$route.query.qa {{ $route.query.qa }}</p>
        </div>
      `,
    },
    name: "a",
    path: "/a/:pa/:paa",
    // when props is set to true,
    // the route.params will be set as the component props.
    props: true,
  },
  {
    component: {
      props: ["pb", "pbb", "qb"],
      template: `
        <div>
          <h2>BBB Component</h2>
          <p>pb: {{ pb }}</p>
          <p style="color:red">pbb: {{ pbb }}</p>
          <p>$route.params.pbb: {{ $route.params.pbb }}</p>
          <p>qb: {{ qb }}</p>
        </div>
      `,
    },
    name: "b",
    path: "/b/:pb/:pbb",
    // object will be set as the component props.
    props: (route) => ({
      pb: route.params.pb,
      qb: route.query.qb,
    }),
  },
  {
    components: {
      default: {
        props: ["pc", "pcc", "qc"],
        template: `
          <div>
            <h2>CCC Component</h2>
            <p>pc: {{ pc }}</p>
            <p>pcc: {{ pcc }}</p>
          </div>
        `,
      },
      side: {
        props: ["foo"],
        template: `
          <div>
            <h2>Side Component</h2>
            <p>foo: {{ foo }} </p>
          </div>
        `,
      },
    },
    name: "c",
    path: "/c/:pc/:pcc",
    props: {
      default: true,
      side: {
        foo: "bar",
      },
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
