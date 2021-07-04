<template>
  <div>
    <h1>App Component</h1>
    <router-link to="/todos/1">/todos/1</router-link>
    <router-link to="/todos/2">/todos/2</router-link>
    <router-link to="/todos/3">/todos/3</router-link>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import VueRouter from "vue-router";
import { RouteConfig } from "vue-router/types";

const routes: RouteConfig[] = [
  {
    component: Vue.extend({
      created() {
        this.fetchData();
      },
      data() {
        return {
          loading: false,
          post: null,
        };
      },
      methods: {
        fetchData() {
          this.post = null;
          this.loading = true;
          const id = this.$route.params.id;
          fetch(`https://jsonplaceholder.cypress.io/todos/${id}`)
            .then((res) => res.json())
            .then((res) => {
              this.loading = false;
              this.post = res;
            });
        },
      },
      template: `
        <div>
          <h2>TODO {{ $route.params.id }} </h2>
          <p v-if="post">title : {{ post.title }} </p>
        </div>
      `,
      watch: {
        $route: "fetchData",
      },
    }),
    path: "/todos/:id",
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
