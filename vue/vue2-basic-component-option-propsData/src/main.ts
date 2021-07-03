import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new App({
  el: "#app",
  propsData: {
    msg: "Hello World",
  },
});
