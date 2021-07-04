<template>
  <div>
    <h1>App Component</h1>
    <header>
      <router-link to="#x">x</router-link>
      <router-link to="#y">y</router-link>
      <router-link to="#xy">xy</router-link>
      <router-link to="#smooth">smooth</router-link>
      <router-link to="#promise">promise</router-link>
    </header>
    <div class="menu">
      <p id="x">X</p>
      <p id="y">Y</p>
      <p id="xy">XY</p>
      <p id="smooth">Smooth</p>
      <p id="promise">Promise</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import VueRouter from "vue-router";

type ScrollBehavior = "auto" | "smooth";
type Position = { x: number; y: number };
type PositionResult =
  | Position
  | { selector: string; offset?: Position; behavior?: ScrollBehavior }
  | void;

const router = new VueRouter({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    // savedPosition is only available when navigation is popstated.
    if (savedPosition) {
      return savedPosition;
    }
    if (!to.hash) {
      return null;
    }
    const position: PositionResult = {
      selector: to.hash,
    };

    if (to.hash === "#x") {
      position.offset = { x: 100, y: 0 };
    } else if (to.hash === "#y") {
      position.offset = { x: 0, y: 100 };
    } else if (to.hash === "#xy") {
      position.offset = { x: 100, y: -100 };
    } else if (to.hash === "#smooth") {
      position.behavior = "smooth";
      position.offset = { x: 100, y: 100 };
    } else if (to.hash === "#promise") {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(position);
        }, 2000);
      });
    }

    return position;
  },
});

export default Vue.extend({
  router,
});
</script>

<style>
a {
  display: block;
}
p {
  height: 1000px;
  width: 10000px;
}
header {
  position: fixed;
  left: 200px;
  top: 200px;
}
.menu {
  margin-left: 200px;
}
</style>
