import Vue from "vue";
import { PluginObject } from "vue/types";

const Plugin: PluginObject<{ name: string }> = {
  install(Vue, options) {
    Vue.mixin({
      mounted() {
        console.log((this as Vue).$vnode?.tag);
      },
    });
  },
};

Vue.use(Plugin);
