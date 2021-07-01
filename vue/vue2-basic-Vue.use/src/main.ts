import Vue from "vue";
import App from "./App.vue";
import CustomPlugin from "./CustomPlugin";

Vue.use(CustomPlugin);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
