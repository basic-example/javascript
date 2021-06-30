import * as Vue from "vue";
import App from "./App.vue";

const app = Vue.createApp(App);

app.config.globalProperties.$filter = {
  uppercase(str: string) {
    return str.toUpperCase();
  },
};

app.mount("#app");
