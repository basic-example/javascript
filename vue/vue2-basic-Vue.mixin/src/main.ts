import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.mixin({
  created() {
    alert(`${(this as Vue).$options.name} mixin created hook event is fired!`);
  },
});

new Vue({
  name: "Root",
  render: (h) => h(App),
}).$mount("#app");
