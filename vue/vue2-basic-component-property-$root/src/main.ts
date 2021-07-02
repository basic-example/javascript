import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  data: () => ({
    foo: 1234,
  }),
  methods: {
    bar: () => {
      alert("$root.bar");
    },
  },
  render: (h) => h(App),
}).$mount("#app");
