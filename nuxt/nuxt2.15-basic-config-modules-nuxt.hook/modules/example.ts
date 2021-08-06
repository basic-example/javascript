import { Module } from "@nuxt/types";

export default (async function (moduleOptions) {
  this.nuxt.hook("ready", () => {
    console.log("Nuxt is ready");
  });

  this.nuxt.hook("close", () => {
    console.log("Nuxt is restarted");
  });

  this.nuxt.hook("error", () => {
    console.log("Nuxt hook error thrown");
  });

  this.nuxt.hook("listen", () => {
    console.log("Nuxt is listening");
  });

  // # all hook list #
  // _render:context
  // build:before
  // build:compile
  // build:compiled
  // build:done
  // build:extendRoutes
  // build:resources
  // build:templates
  // builder:extendPlugins
  // builder:prepared
  // bundler:change
  // bundler:done
  // bundler:error
  // bundler:progress
  // cli:buildError
  // close
  // components:dirs
  // components:extend
  // config
  // export:before
  // export:distCopied
  // export:distRemoved
  // export:done
  // export:extendRoutes
  // export:route
  // export:routeCreated
  // export:routeFailed
  // generate:before
  // generate:cache:ignore
  // generate:distCopied
  // generate:distRemoved
  // generate:done
  // generate:extendRoutes
  // generate:manifest
  // generate:page
  // generate:route
  // generate:routeCreated
  // generate:routeFailed
  // listen
  // modules:before
  // modules:done
  // ready
  // render:before
  // render:beforeResponse
  // render:done
  // render:errorMiddleware
  // render:resourcesLoaded
  // render:route
  // render:routeDone
  // render:setupMiddleware
  // run:before
  // server:devMiddleware
  // server:nuxt:renderLoading
  // vue-renderer:context
  // vue-renderer:spa:prepareContext
  // vue-renderer:spa:templateParams
  // vue-renderer:ssr:context
  // vue-renderer:ssr:csp
  // vue-renderer:ssr:prepareContext
  // vue-renderer:ssr:templateParams
  // watch:fileChanged
  // watch:restart
  // webpack:config
  // webpack:done
} as Module);
