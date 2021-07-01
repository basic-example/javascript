import Vue from "vue";

export default {
  install: (): void => {
    Vue.component("Basic", {
      template: "<p>Hello World</p>",
    });

    // Vue.directive
    // Vue.filter
    // Vue.mixins
    // ...
  },
};
