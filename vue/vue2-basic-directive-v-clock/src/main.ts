import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

setTimeout(() => {
  new Vue({
    components: {
      App,
    },
    data() {
      return {
        message: "Use v-cloak",
      };
    },
  }).$mount("#app1");
}, 1000);

setTimeout(() => {
  new Vue({
    components: {
      App,
    },
    data() {
      return {
        message: "Not Use v-cloak",
      };
    },
  }).$mount("#app2");
}, 1000);
